import React from 'react'

export default function Button({children, className}) {
  return (
  
    <button class={`transition-all duration-300 ease-in-out hover:-translate-y-1 hover:-rotate-3  border-none  rounded-xl overflow-hidden ${className ? className : 'flex  py-4 rounded-none items-center font-medium border-none text-white bg-[#8EB486] px-12'}`}>
    <span className='text-white'>{children}</span>
   
  </button>
  
  )
}
