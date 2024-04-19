'use client';
import React, { useEffect, useState } from 'react';
import { Slider as PlayerSlider } from '@/components/ui/playerSlider';
import { useAudio } from 'react-use';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoShuffle, IoVolumeLowOutline } from 'react-icons/io5';
import { AiFillCaretUp, AiOutlinePause } from 'react-icons/ai';
import usePlayerState from '@/hooks/usePlayerState';
import { ClipLoader } from 'react-spinners';
import { RiPlayFill } from 'react-icons/ri';
import Image from 'next/image';
import { RxLoop } from 'react-icons/rx';

const PlayerContent = () => {
  const { activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext } = usePlayerState();

  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src,
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;


  const handleClickPrevBtn = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }
    if (prevPlayerQueue.length === 0) return;
    playBack();
  };
  const handleClickStartBtn = () => {
    controls.play()
  };
  const handleClickPauseBtn = () => {
    controls.pause()
  };
  const handleClickNextBtn = () => { };

  return (
    <div className="h-full w-full relative">
      <div className=" absolute top-[-16px] w-full">
        <PlayerSlider
          className='w-full'
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value) => {
            controls.seek(value);
          }} />
      </div>

      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className="flex flex-row items-center gap-1 lg:gap-8">
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
        <article>
          <div className='flex flex-row gap-4 items-center'>
            <div className=' relative w-[40px] h-[40px] flex flex-row'>
              <Image fill className='object-cover' src={activeSong?.imageSrc} alt='img' />
            </div>
            <div className=' flex flex-col'>
              <div>{activeSong?.name}</div>
              <div className=' text-neutral-500 text-[14px]'>{activeSong?.channel} · 조회수 7.8만회 · 좋아요 1.7천개</div>
            </div>
          </div>
        </article>
        <div className='flex flex-row gap-2'>
          <div className='lg:flex flex-row gap-2 hidden'>
            <IoVolumeLowOutline size={24} className='cursor-pointer' />
            <IoShuffle size={24} className='cursor-pointer' />
            <RxLoop size={24} className='cursor-pointer' />
          </div>
          <div>
            <AiFillCaretUp size={24} className='cursor-pointer' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerContent;
