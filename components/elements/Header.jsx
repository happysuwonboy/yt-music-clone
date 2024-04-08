'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import UserIcon from '@/components/UserIcon';
import PagePadding from '@/components/PagePadding';
import { FaChromecast } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Logo from '@/components/elements/Logo';
import Navigator from '@/components/elements/Navigator';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import useUIState from '@/hooks/useUIState';

const HeaderDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Drawer direction='left' open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className='w-[240px] h-full'>
        {/* 로고 */}
        {/* 재생목록 + 네비게이션 */}
        <div className='py-3'>
          <div className='px-3'>
            <Logo isInDrawer handleClickClose={() => setIsOpen(false)} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef(null);
  const { headerImageSrc } = useUIState()

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      setIsScrolled(scrollValue !== 0);
    }
    headRef?.current?.addEventListener('scroll', handleScroll)

    return () => {
      headRef?.current?.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      {/* bg section */}
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            alt="배경이미지"
            fill={true}
            className="object-cover"
            src={headerImageSrc || "/img/header-background.jpg"}
          />
        </div>
        <div className="absolute top-0 bg-black opacity-40 w-full h-[400px]"></div>
        <div className="absolute top-0 bg-gradient-to-t from-black w-full h-[400px]"></div>
      </section>
      {/* searchSection */}
      <section className={cn("top-0 left-0 sticky z-10", isScrolled && 'bg-black')}>
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article className="min-w-[480px] h-[42px] flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] hidden lg:flex border border-neutral-500">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="w-full h-full bg-transparent"
                type="text"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            {/* Header Drawer */}
            <HeaderDrawer>
              <article className='lg:hidden'>
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="absolute w-full">{children}</section>
    </header>
  );
};

export default Header;
