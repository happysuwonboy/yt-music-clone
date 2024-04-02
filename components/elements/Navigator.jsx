'use client';

import React from 'react'
import { usePathname, useRouter } from 'next/navigation';

const Navigator = () => {

  const pathname = usePathname();
  console.log('>>pathname', pathname)
  const routes = useRouter();


  return (
    <div>Navigator</div>
  )
}

export default Navigator