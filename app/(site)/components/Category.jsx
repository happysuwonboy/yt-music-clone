import React from 'react'
import useUIState from './../../../hooks/useUIState';
import { homeCategoryList } from '@/lib/dummyData';
import { cn } from '@/lib/utils';

const Category = () => {

  const { homeCategory, headerImageSrc, setHomeCategory, setHeaderImage } = useUIState();

  const handleClickCategory = (item) => {
    if (homeCategory === item.label) {
      setHeaderImage("");
      setHomeCategory("");
    } else {
      setHeaderImage(item.src)
      setHomeCategory(item.label)
    }
  }

  homeCategoryList
  return (
    <ul className=' max-w-full overflow-x-auto flex flew-row gap-4'>
      {homeCategoryList.map(item => {
        return <li key={item.label} className={cn('h-[30px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer',
          homeCategory === item.label && "bg-white text-black hover:bg-white")} onClick={() => handleClickCategory(item)}>
          {item.label}
        </li>
      })}
    </ul>
  )
}

export default Category