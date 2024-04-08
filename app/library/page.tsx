'use client';
 
import PagePadding from '@/components/PagePadding';
import React, { useEffect, useState } from 'react';
import Category from './components/Category';
import PlayListCard from '@/components/PlayListCard';
import { dummyPlaylistArray } from '@/lib/dummyData';
import { shuffleArray } from '@/lib/utils';

const Page = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(()=>{
    const dummyList = [].concat(...Array(4).fill(shuffleArray(dummyPlaylistArray)))
    setList(dummyList);
  },[])

  return (
    <PagePadding>
      <div className='mt-9'></div>
      <Category/>
      <div className='mt-12'></div>
      <section className='grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {list.map(playlist => {
          return <PlayListCard key={playlist.id} playlist={playlist} />
        })}
      </section>
    </PagePadding>
  )
}

export default Page