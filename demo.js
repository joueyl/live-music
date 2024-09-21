const wrtc = require('wrtc');
const ffmpeg = require('fluent-ffmpeg');
const { PassThrough } = require('stream');

// 创建 WebRTC 的 PeerConnection
const peerConnection = new wrtc.RTCPeerConnection({
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
});

// 使用 FFmpeg 将音频文件转换为实时流
const audioStream = new PassThrough();
ffmpeg('input.mp3')
  .inputOption('-re')  // 实时模式
  .audioCodec('libopus')  // 使用 WebRTC 支持的 Opus 编码
  .format('webm')  // 输出为 WebM 格式
  .pipe(audioStream);  // 将音频流写入 PassThrough

// 创建一个自定义的音频轨道，使用 FFmpeg 的输出作为输入
const audioTrack = new wrtc.MediaStreamTrack({
  kind: 'audio',
  id: 'audio1'
});

// 创建 MediaStream 并将音频轨道添加到流中
const mediaStream = new wrtc.MediaStream();
mediaStream.addTrack(audioTrack);

// 将音频轨道添加到 PeerConnection 中
peerConnection.addTrack(audioTrack, mediaStream);

// 创建 WebRTC offer 并设置本地描述
peerConnection.createOffer().then((offer) => {
  return peerConnection.setLocalDescription(offer);
}).then(() => {
  // 本地描述设置完成，发送 offer 给对端
  console.log('Local description set, sending offer');
  // 你可以将 offer 发送给对端 WebRTC 连接
}).catch(console.error);

// 处理来自对端的 answer
function handleAnswer(answer) {
  peerConnection.setRemoteDescription(new wrtc.RTCSessionDescription(answer))
    .catch(console.error);
}

// 监听 ICE 候选者事件，发送给对端
peerConnection.onicecandidate = (event) => {
  if (event.candidate) {
    console.log('ICE Candidate:', event.candidate);
    // 发送候选者给对端
  }
};

// 监听 WebRTC 连接状态变化
peerConnection.oniceconnectionstatechange = () => {
  console.log(`ICE connection state: ${peerConnection.iceConnectionState}`);
};

// 监听当接收到流时
peerConnection.ontrack = (event) => {
  console.log('Received remote track:', event.track);
  // 你可以在这里处理接收到的远程音视频流
};