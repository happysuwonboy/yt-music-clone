'use client';
import React, { useState } from 'react';
import { Slider as PlayerSlider } from '@/components/ui/playerSlider';
import { useAudio } from 'react-use';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5';
import { AiOutlinePause } from 'react-icons/ai';
import usePlayerState from '@/hooks/usePlayerState';
import { ClipLoader } from 'react-spinners';
import { RiPlayFill } from 'react-icons/ri';

const PlayerContent = () => {
  const { activeSong } = usePlayerState();

  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src || 'sdsd',
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  const handleClickPrevBtn = () => {};
  const handleClickStartBtn = () => {};
  const handleClickPauseBtn = () => {};
  const handleClickNextBtn = () => {};

  return (
    <div className="h-full w-full relative">
      <div className=" absolute top-[-16px] w-full">
        <PlayerSlider />
      </div>

      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className="flex flex-row items-center">
          <IoPlaySkipBackSharp
            size={24}
            className="cursor-pointer"
            onClick={handleClickPrevBtn}
          />
          {isLoading ? (
            <ClipLoader color="#FFF" />
          ) : state.playing ? (
            <AiOutlinePause
              size={40}
              className="cursor-pointer"
              onClick={handleClickPauseBtn}
            />
          ) : (
            <RiPlayFill
              size={40}
              className="cursor-pointer"
              onClick={handleClickStartBtn}
            />
          )}
          <IoPlaySkipForwardSharp
            size={24}
            className="cursor-pointer"
            onClick={handleClickNextBtn}
          />
        </div>
        <article></article>
        <div></div>
      </section>
    </div>
  );
};

export default PlayerContent;
