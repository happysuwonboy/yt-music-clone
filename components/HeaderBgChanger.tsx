"use client";
import useUIState from '@/hooks/useUIState';
import React, { useEffect } from 'react';

const HeaderBgChanger = ({imageSrc} : {imageSrc:string}) => {
    const { setHeaderImage } = useUIState();

    useEffect(()=>{
        if (imageSrc) setHeaderImage(imageSrc)
    },[imageSrc])

  return (
    <></>
  )
}

export default HeaderBgChanger