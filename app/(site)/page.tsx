'use client';
import Category from '@/app/(site)/components/Category';
import PagePadding from '@/components/PagePadding';
import PlayListCarousel from '@/components/PlayListCarousel';
import { dummyPlaylistArray } from '@/lib/dummyData';
import UserIcon from '@/components/UserIcon';

const page = async () => {
  
  const dummyPlaylistArray1 = [...dummyPlaylistArray];

  
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className='mt-12'></div>
        {/* Carousel */}
        <PlayListCarousel 
          playListArray={[...dummyPlaylistArray1]}
          thumbnail = {<div className='w-[56px] h-[56px]'><UserIcon size='lg'/></div>}
          title = '다시 듣기'
          subTitle='해피수원보이'
        />

      </div>
    </PagePadding>
  );
};

export default page;
