declare module 'wrtc' {
    export class RTCPeerConnection {
      constructor(configuration?: RTCConfiguration);
      createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
      setLocalDescription(description: RTCSessionDescriptionInit): Promise<void>;
      setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void>;
      addIceCandidate(candidate: RTCIceCandidateInit): Promise<void>;
      addTrack(track: MediaStreamTrack, stream: MediaStream): RTCRtpSender;
      onicecandidate: (event: { candidate: RTCIceCandidate | null }) => void;
      ontrack: (event: { streams: MediaStream[] }) => void;
    }
  
    export class RTCSessionDescription {
      constructor(descriptionInitDict: RTCSessionDescriptionInit);
    }
  
    export class RTCIceCandidate {
      constructor(candidateInitDict: RTCIceCandidateInit);
    }
  
    export class MediaStream {
      constructor();
    }
  
    export class MediaStreamTrack {
      constructor(options: { kind: 'audio' | 'video' });
    }
  }
  