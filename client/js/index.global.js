(() => {
  // client/index.ts
  var button = document.querySelector("#start");
  button.onclick = async () => {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302"
        }
      ]
    });
    const offer = await peer.createOffer({
      offerToReceiveAudio: true
    });
    peer.setLocalDescription(offer);
    peer.ontrack = function(event) {
      const stream = new MediaStream();
      stream.addTrack(event.track);
      const audio = document.getElementById("audio");
      audio.srcObject = stream;
      audio.play();
    };
    fetch("/music/get_spd", {
      method: "POST",
      body: JSON.stringify({
        spd: offer.sdp
      }),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEwNTI1MDgxMzhAcXEuY29tIiwiaWF0IjoxNzI2ODAxNzY5LCJleHAiOjE3MjkzOTM3Njl9.V6Zt6-30_U6CFds2FQinF-41YSMm_Qhik3dw3MWjN_w"
      }
    }).then((res) => res.json()).then((res) => {
      peer.setRemoteDescription({
        type: "answer",
        sdp: res.data
      });
    });
  };
})();
