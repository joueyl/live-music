// import { Mediasoup } from './mediasoup';
import {io} from 'socket.io-client'
const button = document.querySelector('#start') as HTMLButtonElement;
button.onclick =async () => {
  const peer = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  });
  const offer = await peer.createOffer({offerToReceiveAudio:true})
  peer.setLocalDescription(offer)
  peer.ontrack = function(event){
    const stream = new MediaStream()
    stream.addTrack(event.track);
    const audio = (document.getElementById('audio') as HTMLAudioElement);
    audio.srcObject = stream
    audio.play()
  }

  fetch('/music/get_spd',{
    method:'POST',
    body:JSON.stringify({
      spd:offer.sdp
    }),
    headers:{
      "content-type":"application/json",
      Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEwNTI1MDgxMzhAcXEuY29tIiwiaWF0IjoxNzI4NzAzODE4LCJleHAiOjE3MzEyOTU4MTh9.dtXjVnUbtitF6XHoo8rL9XlGmjqAyM51Na9k_rm_bdo'
    }
  }).then((res)=>res.json()).then((res)=>{
    peer.setRemoteDescription({type:'answer',sdp:res.data})
  })
};
const socket = io('/')
