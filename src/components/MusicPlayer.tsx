import React, { useEffect, useRef } from "react";
import { load } from "../music-player";

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      load(audioRef.current);
    }
  }, []);

  return <audio autoPlay id="music" ref={audioRef}  ></audio>;
};

export default MusicPlayer;
