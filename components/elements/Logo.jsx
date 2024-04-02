'use client';

import React from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import IconButton from '@/components/elements/IconButton';

const Logo = () => {
  // push -> 리액트의 navigate 기능과 유사
  const { push } = useRouter();

  const handleClickLogo = () => push("/")

  const handleClickMenu = () => { }


  return (
    <section className='flex flex-row items-center gap-3'>
      <IconButton
        icon={<RxHamburgerMenu size={24} />}
        onClickIcon={handleClickMenu}
      />
      <div className='cursor-pointer' onClick={handleClickLogo}>
        <Image alt='logo' width={100} height={30} src={"/main-logo.svg"} />
      </div>
    </section>
  )
}

export default Logo