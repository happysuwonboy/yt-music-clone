import React from 'react';
import { Playlist } from '@/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import PlayListCard from '@/components/PlayListCard';

interface PlayListCarouselProps {
  title: string;
  subTitle?: string;
  thumbnail?: React.ReactNode;
  playListArray?: Playlist[];
}

const PlayListCarousel: React.FC<PlayListCarouselProps> = ({
  title,
  subTitle,
  thumbnail,
  playListArray,
}) => {
  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3 items-center">
            {thumbnail}
            <div className="flex flex-col justify-center mb-4">
              <div>
                {subTitle && <div className="text-neutral-500">{subTitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className='absolute bottom-[20px]'>
              <CarouselPrevious className='right-2'/>
              <CarouselNext className='left-2' />
            </div>
          </div>
        </div>
        <CarouselContent>
          {playListArray?.map((playlist, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <PlayListCard playlist={playlist} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PlayListCarousel;