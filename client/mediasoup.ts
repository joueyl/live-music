import { Device } from 'mediasoup-client';
import { RtpCapabilities } from 'mediasoup-client/lib/RtpParameters';
import { Transport } from 'mediasoup-client/lib/Transport';
import { AppData } from 'mediasoup-client/lib/types';
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
  on(event: Event, callback: (params: any) => void) {
    if (!this.onEvent[event]) {
      this.onEvent[event] = [callback];
    } else {
      this.onEvent[event as string].push(callback);
    }
  }
  private initSocket(params: InitParams) {
    this.socket = io('/', { auth: { room: params.room } });
    this.socket.on('CreateRoomed',async () => {
      this.getRtp(params.getRtpName || 'getRouterRtpCapabilities');
     const consume = await this.getConsume(params.getConsumeName || 'getConsume');
     consume.on('connect',()=>{
        console.log('connect');
     })
    });
  }
  private getConsume(eventName: string) {
    return new Promise<Transport<AppData>>((resolve, reject) => {
      this.socket.emit(eventName, (data) => {
        const transport = this.device.createRecvTransport(data);
        this.transport = transport;
        transport.on('connect',({ dtlsParameters }, callback, errback)=>{
            this.socket.emit('connectConsumerTransport',{
                transportId:transport.id,
                dtlsParameters
            },()=>{
                callback()
                this.EmitEvnet('Finish')
                resolve(transport)
            })
        })
        transport.on('connectionstatechange',(state)=>{
            console.log(state);
        })
        this.getStream()
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
  getStream() {
    const {rtpCapabilities} = this.device
    this.socket.emit('consume',{
        rtpCapabilities
    },()=>{
        
    })
  }
}
