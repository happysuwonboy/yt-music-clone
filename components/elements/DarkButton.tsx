import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps {
    icon? : React.ReactNode;
    label : string;
    className? : string;
}

const DarkButton : React.FC<ButtonProps>= ({icon, label, className, ...props}) => {
  return (
    <div className={cn('border border-neutral-700 hover:bg-neutral-700 cursor-pointer bg-black text-white rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2', className)} {...props}>
        <span>{icon}</span>
        <span>{label}</span>
    </div>
  )
}

export default DarkButton