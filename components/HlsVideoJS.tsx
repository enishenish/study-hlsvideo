import React, { useEffect, useRef, useState } from 'react'
import videoJs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js'
import "video.js/dist/video-js.css"


const HlsVideoJS = ({videoSource} : {videoSource?: string}) => {
  const [player, setPlayer] = useState<null | VideoJsPlayer>(null);
  const videoRef = useRef(null)
  const videoJsOption:VideoJsPlayerOptions = {
    controls: true,
    textTrackSettings: {persistTextTrackSettings: false}
  } 
  console.log(videoSource);
  

  useEffect(() => {
    if (videoSource) {
      const playerVar = videoJs(videoRef.current, videoJsOption, () => {
        playerVar.src(videoSource);
        console.log("ready");
        setPlayer(playerVar);
      });
    }
    return () => {
      player?.dispose()
      setPlayer(null)
    }
  }, [])

  return (
    <div style={{width: "100%"}}>
      <video
        style={{width: "100%"}}
        ref={videoRef}
        className="video-js"
      />
    </div>
  )
}


export default HlsVideoJS
