import React from 'react';

export default function Home() {
    
  return (

    <main className='h-full w-full'>
          <section className='w-full h-screen  flex flex-col justify-center items-center'>
      <div className='h-fit w-fit flex flex-col justify-center z-10 items-center '>
        <h1 className='text-[10vw] font-serif italic text-orange-600  z-10 leading-none'>Benjamin</h1>
        <div className='flex items-center justify-center'>
        <span className='  text-[15vw] font-extrabold  font-glock z-[9] -mt-8 leading-none'>Eisenstein</span>
        <span className='text-[2.5vw] font-extrabold font-glock'> Miller</span>
        </div>
      </div>
      <section className=''>

      </section>
    </section>
    <section className='w-full h-auto bg-black flex justify-center pt-8'>
      <div className='flex flex-col items-center'>
      <h2 className='text-xl md:text-[2vw] font-serif text-white z-10 leading-none'>Welcome to <span className='text-orange-600'>Ben's</span> World</h2>
    <p className='text-white text-sm text-center md:text-[3vw] md:mt-4'>Social Entrepreneur, Socialite, Artist, and Writer.</p>
    <div className='py-16 flex flex-col md:flex-row gap-16 items-center md:items-end '>
      <div className='flex px-14 items-center -translate-x-4 md:-translate-x-0 w-full '>
      <div className='h-40 hidden md:block aspect-[4/3] md:aspect-square translate-x-8 z-10 bg-slate-300 '>

</div>
      <div className='w-20  flex-1  md:min-w-80 aspect-[9/12]  spect-[4/3] md:aspect-[12/21] bg-slate-500 relative'>
      <div className='h-40 block  md:hidden aspect-square translate-x-8 z-10 bg-slate-900 absolute top-1/2 -left-14 -translate-y-1/2'>

</div>
      </div>
   
      </div>
      
      
      <div className='max-w-lg space-y-8 px-8'>
        <p className='text-white text-sm md:text-base'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati reprehenderit sequi. Magni consequatur ad odio, dignissimos, voluptatum reprehenderit nemo soluta ab excepturi porro repellat deserunt recusandae. Cum nulla deserunt doloremque maxime.
        </p>
        <button className='flex  py-4 rounded-none items-center font-medium border-b-2 border-white text-white bg-orange-600 px-8'>
          Explore
        </button>
      </div>
    </div>


      </div>
    </section>

    </main>
  
  );
}