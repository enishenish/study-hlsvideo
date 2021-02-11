import React, { useEffect, useRef, useState } from 'react'
import hls from 'hls.js'

const HlsHlsJS = ({ videoSource }: { videoSource?: string }) => {
  const [player, setPlayer] = useState<null | hls>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hlsPlayer = new hls();
    if (hls.isSupported() && videoRef.current !== null && videoSource) {
      hlsPlayer.loadSource(videoSource);
      hlsPlayer.attachMedia(videoRef.current);
      setPlayer(hlsPlayer);
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')){
      if( videoSource ) {
        videoRef.current.src = videoSource;
      }
    }
    return () => {
      player?.destroy();
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <video style={{ width: "100%" }} ref={videoRef} className="hls-js" controls={true}/>
    </div>
  );
};

export default HlsHlsJS
