import Hls from 'hls.js'
import { io, Socket } from 'socket.io-client'
export class Phls {
    context: Hls = new Hls({
        // 设定一些关键参数
        liveSyncDurationCount: 5, // 设置实时同步的时长（比如同步最近的3个分片）
        maxBufferLength: 30, // 缓冲区最大长度，防止缓冲区过大
        maxMaxBufferLength: 600, // 设置最大的缓存长度
        maxBufferSize: 60 * 1000 * 1000, // 最大缓冲区大小，单位字节
        // startLevel: -1, // 从哪里开始播放（-1表示自动选择）
        capLevelOnFPSDrop: true, // 如果帧率降低，限制分片的码率
        autoStartLoad: true, // 启动时自动加载流
        enableWorker: true, // 启用 Web Worker 以提高性能
        liveDurationInfinity: true, // 永远不停止流（直播场景）
        // 额外的实时模式参数
    })
    element: HTMLMediaElement

    socket: Socket
    private sockLink: string
    constructor(element: HTMLMediaElement, socketLink: string) {
        this.element = element
        this.listen(socketLink)
    }
    listen(url: string) {
        this.socket = io(url)
        this.socket.on('server:data', (res) => {
            if (res.currentMusic) {
                this.context.loadSource('/m3u8/music.m3u8')
                this.context.attachMedia(this.element)
            }
        })
        this.socket.on("update:music", (res) => {
            if (!res.immediate) {
                this.element.onended = () => {
                    this.context.loadSource('/m3u8/music.m3u8')
                    this.context.attachMedia(this.element)
                    this.element.onended = null
                }
            } else {
                this.context.loadSource('/m3u8/music.m3u8')
                this.context.attachMedia(this.element)
            }
        })
    }
}