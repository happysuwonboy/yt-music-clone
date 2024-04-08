import React from 'react';
import { TopSong } from '@/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import PlayListCard from '@/components/PlayListCard';
import { chunkArray } from '@/lib/utils';
import GenreCard from './GenreCard';
import { genreList } from '../lib/dummyData';

interface GenreListCarouselProps {
  title: string;
  subTitle?: string;
  thumbnail?: React.ReactNode;
  genreList: string[];
}

const GenreColumn = ({genreList = []} : {genreList: string[]}) => {


  return (
    <div className='flex flex-col gap-4'>
      {genreList.map((genre,idx) => {
        return <GenreCard key={genre} genre={genre} />
      })}

    </div>
  )
}

const GenreListCarousel: React.FC<GenreListCarouselProps> = ({
  title,
  subTitle,
  thumbnail,
  genreList,
}) => {

  const chunkedGenreList = chunkArray(genreList, 4) as string[][];
  
  return (
    <div className="w-full">
      <Carousel opts={{
        align : 'start'
      }}>
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
          {chunkedGenreList?.map((genreList, index) => (
            <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
              <GenreColumn genreList={genreList} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default GenreListCarousel;
