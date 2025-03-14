import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Multimedia from '../components/screens/home/Multimedia';
import { ben_img_40, ben_img_47, ben_img_63, tranparent_img, transparent_img_2 } from '../assets';
import Button from '../components/core/Button';
import { fadeInUp, slideInLeft, slideInLeftDelay } from '../utils/variants';
import Collaboration from '../components/screens/home/collaboration';
import BannerTrail from '../components/core/BannerTrail';
import CTA from '../components/screens/home/CTA';

export default function Home() {

  return (

    <main className='h-full w-full'>

      {/* first section */}
      <section className='w-full h-svh relative flex flex-col  py-24  justify-between items-center'>
        
        {/* text */}
        <div className='h-fit w-fit flex flex-col justify-center mt-12  min-[420px]:mt-0 z-10 items-center '>
          <h1 className='text-[12vw] min-[840px]:text-[10vw] font-serif italic text-[#8EB486]  z-10 leading-relaxed min-[840px]:leading-none'>Benjamin</h1>
          <div className='flex items-center justify-center'>
            <span className='text-[18vw]  min-[840px]:text-[15vw] font-extrabold  font-glock z-[9] -mt-8 leading-none'>Eisenstein</span>
            <span className='text-[2.5vw] font-extrabold font-glock'> Miller</span>
          </div>
        </div>

        {/* background image */}
        <section className='flex absolute w-full min-[840px]:pointer-events-none  flex-col min-[840px]:flex-row -translate-x-1/2 left-1/2 -bottom-11  z-10 items-center justify-center'>
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className='overflow-hidden object-cover relative'
          >
            <img src={transparent_img_2} alt="" className='w-full h-full top-8 min-w-[300px] max-w-[420px] object-cover' />
          </motion.div>
          <div className='h-40 bg-black flex flex-col w-full min-[840px]:hidden -mt-11'>
            <div className='flex-1 flex items-center justify-center font-semibold text-white text-xl hover:tracking-[0.5em] transition-all duration-300 cursor-pointer bg-[#8EB486] w-full h-full'>
            Explore
            </div>
            <div className='flex-1 bg-black w-full h-full'>

            </div>
          </div>
        </section>

        {/* buttons */}
        <div className='hidden min-[840px]:flex w-full  items-start justify-between max-w-8xl mx-auto px-4 lg:px-12 '>

          <div className='flex flex-col gap-4 justify-center items-end '>
          <Button className={'bg-[#8EB486]  text-white px-8 py-2 w-60'}>
          Explore
         </Button>
         <Button className={'bg-[#8EB486] text-white px-8 py-2 w-48 lg:w-40'}>
          Explore
         </Button>
         <Button className={'bg-[#8EB486] text-white px-8 py-2 w-36 lg:w-28'}>
          Explore
         </Button>

          </div>
          <div className='flex flex-col w-fit gap-4 justify-center items-end'>
          <p className='text-black text-sm min-[1220px]:max-w-xs max-w-[200px] md:text-base '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic ex sed expedita vel unde.
          </p>
          </div>

        </div>
      </section>

      {/* second section */}
      <section className='w-full h-auto bg-black flex justify-center pt-16'>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl md:text-[2vw] font-glock text-white z-10 leading-none'>Welcome to <span className='text-[#8EB486]'>Ben's</span> World</h2>
          <p className='text-white text-sm text-center font-glock md:text-[3vw] md:mt-4'>Social Entrepreneur, Socialite, Artist, and Writer.</p>
          <div className='py-16 flex flex-col md:flex-row gap-6 lg:gap-16 items-center md:items-end '>
            <motion.div 
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className='flex px-4 md:px-6 items-center  w-full '>
              <div className='h-40 hidden md:block aspect-[4/3] md:aspect-square translate-x-8 z-10  '>
              <img src={ben_img_63} alt="" className='w-full h-full object-cover overflow-hidden' />

              </div>
              <div className='w-20  flex-1  md:min-w-80 aspect-[9/12]  spect-[4/3] md:aspect-[12/21] relative '>
              <img src={ben_img_40} alt="" className='w-full h-full object-cover overflow-hidden' />
                <div className='h-32 md:h-40 block  overflow-hidden  md:hidden aspect-square translate-x-8 z-10 bg-slate-900 absolute top-1/2 -left-10 md:-left-14 -translate-y-1/2'>
                <img src={ben_img_63} alt="" className='w-full h-full object-cover' />
                </div>
              </div>
            </motion.div>

            <div className='max-w-lg overflow-hidden space-y-8 px-6 md:px-0 md:pr-8'>
              <motion.p 
                variants={slideInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='text-white text-sm md:text-base'
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati reprehenderit sequi. Magni consequatur ad odio, dignissimos, voluptatum reprehenderit nemo soluta ab excepturi porro repellat deserunt recusandae. Cum nulla deserunt doloremque maxime.
              </motion.p>
              <Button >
                Explore
              </Button>
            </div>
          </div>


        </div>
      </section>

      {/* third section */}
      <section className='relative flex flex-col md:flex-row gap-8 items-center p-4 xl:p-16 justify-center overflow-hidden'>
        {/* Background text strip */}
        <BannerTrail text={"BLOGS"} bgColor={"#000"} direction={12} revert={false} />

        <div className='w-full flex flex-col mx-auto gap-8 relative '>
          <h3 className='text-3xl  md:text-6xl font-rubix text-black z-10 font-bold leading-none tracking-widest'>Explore <br /> 
          <motion.p
          variants={slideInLeftDelay}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className='text-[#8EB486] font-serif inline-block italic '>Ben's</motion.p> Blogs</h3>

          <article className="w-full h-80 md:h-auto max-h-[500px] md:aspect-square bg-gray-400  overflow-hidden"></article>
          <button className='flex  py-4 items-center font-medium border-b-2 border-white md:mt-8 text-white bg-[#8EB486] px-8 translate-x-16 h-40'>Explore some more</button>
        </div>
        <div className='w-full flex flex-col mx-auto gap-8'>
          <article className="w-full h-80 md:h-auto max-h-[460px] md:aspect-[4/3] z-10  bg-gray-400  overflow-hidden">
          </article>
          <article className="w-full h-80 md:h-auto max-h-[460px] md:aspect-[4/3]  bg-gray-400  overflow-hidden"></article>
        </div>

      </section>

      {/* fourth section */}
      <Multimedia />

      {/* fifth section */}
      <Collaboration />
      <CTA />

      <footer className='h-96 w-full bg-greeny '>

      </footer>
    

    </main>

  );
}