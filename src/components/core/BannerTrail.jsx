import React from 'react'

export default function BannerTrail({text, direction,bgColor,revert,stickyTop,inConsice}) {
  return (
    <div className={`absolute ${stickyTop ? `top-0` : `-left-12 -right-12  top-[45%]`} ${revert ? `rotate-[${direction}deg]` : `-rotate-[${direction}deg]`}  ${bgColor ? `bg-[${bgColor}]` : 'bg-[#000]'} ${inConsice ?  "h-16" : " h-24 "} w-[150%]   flex items-center overflow-hidden whitespace-nowrap`}>
          <div className='animate-scroll flex'>
            {[...Array(30)].map((_, i) => (
              <span key={i} className='text-lg uppercase font-bold text-neutral-600 mx-4'>{text || ""}</span>
            ))}
      </div>
    </div>
  )
}
