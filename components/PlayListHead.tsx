'use client';
import React from 'react';
import { Playlist } from '../types/index';
import IconButton from './elements/IconButton';
import { FiFolderPlus, FiMoreVertical, FiPlay } from 'react-icons/fi';
import Image from 'next/image';
import { getRandomElementFromArray } from '@/lib/utils';
import WhiteButton from './elements/WhiteButton';
import DarkButton from './elements/DarkButton';

interface PlayListHeadProps {
  playlist?: Playlist;
}

const PlayListHead: React.FC<PlayListHeadProps> = ({ playlist }) => {

  
  if (!playlist) return <div>error</div>;

  const { id, owner, playlistName, songList } = playlist;

  const randomSong = getRandomElementFromArray(songList);

  return (
    <section>
      <div className="flex flex-row gap-[50px]">
        <div className=" relative w-[160px] h-[160px] lg:h-[240px] lg:w-[240px]">
          <Image alt="songImg" fill src={randomSong?.imageSrc} />
        </div>
        <article className="flex flex-col justify-center">
          <div className=" font-bold text-[28px]">{playlistName}</div>
          <div className=" text-neutal-400 mt-4 text-[14px]">
            <div>{`앨범 · ${owner} · 2019`}</div>
            <div>{`${songList.length}곡 · 15분`}</div>
          </div>
          <ul className="hidden lg:flex flex-row gap-4 mt-4">
            <IconButton icon={<FiMoreVertical size={24} />} />
            <WhiteButton
              className="w-[85px] text-[14px]"
              icon={<FiPlay />}
              label="재생"
            />
            <DarkButton
              className="w-[135px] text-[14px]"
              icon={<FiFolderPlus />}
              label="보관함에 저장"
            />
          </ul>
        </article>
      </div>
      <ul className="flex flex-row gap-4 mt-4 lg:hidden">
        <IconButton icon={<FiMoreVertical size={24} />} />
        <WhiteButton
          className="w-[85px] text-[14px]"
          icon={<FiPlay />}
          label="재생"
        />
        <DarkButton
          className="w-[135px] text-[14px]"
          icon={<FiFolderPlus />}
          label="보관함에 저장"
        />
      </ul>
    </section>
  );
};

export default PlayListHead;
