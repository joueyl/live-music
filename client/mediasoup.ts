//@ts-nocheck
import { Device } from 'mediasoup-client';
import { RtpCapabilities } from 'mediasoup-client/lib/RtpParameters';
import { Transport } from 'mediasoup-client/lib/Transport';
import { AppData, Consumer } from 'mediasoup-client/lib/types';
import { io, Socket } from 'socket.io-client';
type Event = 'Error' | 'Connect' | 'GetRtp' | 'Finish';
interface InitParams {
  getRtpName?: string;
  getConsumeName?: string;
  createConsumeName?: string;
  room: any;
}
export class Mediasoup {
  socket: Socket;
  onEvent: { [key: string]: Function[] } = {};
  device: Device = new Device();
  transport: Transport<AppData>;
  constructor(params: InitParams) {
    this.initSocket(params);
  }
  /**
   * 创建事件监听
   * @param {Event} event 事件名
   * @param {Function} callback 回调参数
   */
  on(event: Event, callback: (params: any) => void) {
    if (!this.onEvent[event]) {
      this.onEvent[event] = [callback];
    } else {
      this.onEvent[event as string].push(callback);
    }
  }
  /**
   * 初始化socket
   * @param {InitParams} params
   */
  private initSocket(params: InitParams) {
    //创建连接
    this.socket = io('/', { auth: { room: params.room }, reconnection: false });
    //监听房间创建完成
    this.socket.on('CreateRoomed', async () => {
      //获取rtp
      this.getRtp(params.getRtpName || 'getRouterRtpCapabilities');
      //创建消费者
      await this.getConsume(
        params.getConsumeName || 'getConsume',
      );
    });
    this.socket.on('error',(data)=>{
      this.EmitEvnet('Error',data)
    })
  }
  private getConsume(eventName: string) {
    return new Promise<Transport<AppData>>((resolve, reject) => {
      //通知服务器创建消费者连接
      this.socket.emit(eventName, async (data) => {
        //创建rtc连接
        const transport = this.device.createRecvTransport(data);
        this.transport = transport;
        transport.on('connect', ({ dtlsParameters }, callback, errback) => {
          //前端消费者连接到后端webrtc
          this.socket.emit(
            'connectConsumerTransport',
            {
              transportId: transport.id,
              dtlsParameters,
            },
            () => {
              this.EmitEvnet('Finish');
              callback();
              resolve(transport);
            },
          );
        });
        const { stream, consumer } = await this.connectProducer(transport);
        const audio = document.querySelector('#audio') as HTMLAudioElement;
        transport.on('connectionstatechange', (state) => {
          if (state == 'connected'&&consumer.track.readyState=='live') {
            consumer.getStats().then((stats) => {
              stats.forEach((report) => {
                console.log(report);
                if (report.type === 'inbound-rtp' && report.kind === 'audio') {
                  console.log('Audio bytes received:', report.bytesReceived);
                  console.log('Packets lost:', report.packetsLost);
                }
              });
            });
            audio.srcObject = stream;
            audio.play();
          }
        });
        this.socket.on('newProducer',async()=>{
          const { stream } = await this.connectProducer(transport);
          console.log(stream);
          const audio = document.querySelector('#audio') as HTMLAudioElement;
          audio.srcObject = stream
          audio.play()
        })
      });
    });
  }
  private getRtp(eventName: string) {
    this.socket.emit(
      eventName,
      async (routerRtpCapabilities: RtpCapabilities) => {
        await this.device.load({ routerRtpCapabilities });
        this.EmitEvnet('getRtp', routerRtpCapabilities);
      },
    );
  }
  /**
   *  触发监听的事件
   *  @param eventName 事件名
   *  @param arg 回调参数
   * */
  private EmitEvnet(eventName: string, arg?: any) {
    const fnArr = this.onEvent[eventName];
    if (fnArr) {
      fnArr.forEach((item) => item(arg));
    }
  }
  connectProducer(transport: Transport<AppData>) {
    const { rtpCapabilities } = this.device;
    return new Promise<{ stream: MediaStream; consumer: Consumer<AppData> }>(
      (resolve, reject) => {
        //获取服务器的提供者参数
        this.socket.emit(
          'connectProducer',
          {
            rtpCapabilities,
          },
          async (data) => {
            //获取服务器提供者参数
            const { producerId, id, kind, rtpParameters } = data;
            //连接提供者
            const consumer = await transport.consume({
              producerId,
              id,
              kind,
              rtpParameters,
            });
            const stream = new MediaStream();
            stream.addTrack(consumer.track);
            resolve({ stream, consumer });
          },
        );
      },
    );
  }
}
