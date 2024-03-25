"use client";

import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import {
  PlayIcon,
  PauseIcon,
  BackwardIcon,
  ForwardIcon,
  FilmIcon,
} from "@heroicons/react/24/outline";

export type PlayerProps = {
  videoSrc: string;
};

export default function Player({ videoSrc }: PlayerProps) {
  const [isClient, setIsClient] = useState(false);
  const [playing, setPlaying] = useState(false);

  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleBackword = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime - 5, "seconds");
    }
  };

  const handleForward = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + 5, "seconds");
    }
  };

  return (
    <div
      data-testid="player-component"
      className="p-0 w-full bg-green-400 rounded-xl overflow-clip border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="w-full aspect-video overflow-clip">
        {isClient ? (
          <ReactPlayer
            ref={playerRef}
            url={videoSrc}
            width="100%"
            height="100%"
            playing={playing}
            onPlay={handlePlay}
            onPause={handlePause}
          />
        ) : (
          <div className="h-full w-full bg-white flex items-center justify-center overflow-clip">
            <div>
              <FilmIcon className="h-12 w-12 md:h-20 md:w-20 text-black" />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <div
          role="button"
          aria-label="backward button"
          data-testid="backward-button"
          onClick={handleBackword}
          className="inline-block mx-2 p-2 h-fit rounded-full border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <BackwardIcon className="h-4 w-4 text-black" />
        </div>
        <div
          role="button"
          aria-label="play pause button"
          data-testid="playpause-button"
          onClick={handlePlayPause}
          className="inline-block mx-2 p-2 h-fit rounded-full border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          {playing ? (
            <PauseIcon
              data-testid="pause-icon"
              className="h-6 w-6 text-black"
            />
          ) : (
            <PlayIcon data-testid="play-icon" className="h-6 w-6 text-black" />
          )}
        </div>
        <div
          role="button"
          aria-label="forward button"
          data-testid="forward-button"
          onClick={handleForward}
          className="inline-block mx-2 p-2 h-fit rounded-full border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <ForwardIcon className="h-4 w-4 text-black" />
        </div>
      </div>
    </div>
  );
}
