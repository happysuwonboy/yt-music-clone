import { cn } from '@/lib/utils';
import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
    icon : React.ReactNode;
    label : string;
    className? : string;
}

const WhiteButton : React.FC<ButtonProps>= ({icon, label, className, ...props}) => {
  return (
    <div className={cn('hover:bg-neutral-200 cursor-pointer bg-white text-black rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2', className)} {...props}>
        <span>{icon}</span>
        <span>{label}</span>
    </div>
  )
}

export default WhiteButton