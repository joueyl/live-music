// import { Mediasoup } from './mediasoup';
import { io } from 'socket.io-client'
import {Phls} from './hls'
import Hls from 'hls.js'
const hlsbutton = document.getElementById('hls') as HTMLButtonElement

new Phls(document.getElementById('audio') as HTMLAudioElement ,'/')
hlsbutton.onclick = async () => {
  if (Hls.isSupported()) {
    const audio = (document.getElementById('audio') as HTMLAudioElement);
    audio.crossOrigin = 'anonymous'
    const hls = new Hls({
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
    hls.loadSource('/m3u8/music.m3u8')
    hls.attachMedia(audio)
    audio.addEventListener('ended', () => {
      hls.loadSource('/m3u8/music.m3u8')
      hls.attachMedia(audio)
    })
  }
}
