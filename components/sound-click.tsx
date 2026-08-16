"use client";
import React from "react";
import useSound from "use-sound";

type SoundClickProps = {
  children: React.ReactNode;
};

const SoundClick: React.FC<SoundClickProps> = ({ children }) => {
  const [play, { stop }] = useSound("/assets/sounds/menu-hover.mp3");
  let lastPlay = 0;
  const playMoveSound = () => {
    const now = performance.now();
    if (now - lastPlay < 70) return;
    lastPlay = now;
    play();
  };
  return <div onClick={playMoveSound}>{children}</div>;
};

export default SoundClick;
