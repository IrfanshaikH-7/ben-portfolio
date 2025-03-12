import React from 'react'
import { ben_img_11, ben_img_12, ben_img_19, ben_img_63 } from '../../../assets'
import BannerTrail from '../../core/BannerTrail'

export default function Collaboration() {
  return (
    <>
     <section className='bg-black h-fit w-full text-white py-8 relative'>
      <h1 className='text-4xl font-bold text-center font-glock '>Collaborations</h1>
      {/* <BannerTrail inConsice={true} text={"Collaborations"} stickyTop={true} bgColor={"#8EB486"} direction={0} revert={false} /> */}
      <div className='mt-12 max-w-7xl mx-auto  p-4 flex lg:flex-row flex-col justify-between gap-12'>
        <section className='relative'>
        <div className='h-80 aspect-[3/4] relative bg-gray-400 rounded-xl '>
        <img src={ben_img_19} alt="ben-19" className='absolute top-0 left-0 w-full h-full object-cover' />
        <div className='absolute bottom-0 left-[40%] min-[400px]:left-[60%] w-full h-full  flex flex-col justify-end p-4'>
            <h2 className='text-2xl font-bold'>Ben 19</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
        <h3 className='text-[12vw] lg:text-[9vw] tracking-wider font-bold font-glock whitespace-nowrap absolute -bottom-36 lg:-bottom-44'>BAD TALKS</h3>
        </div>
  

        </section>
        <section className='z-10 flex flex-col lg:flex-row gap-6 lg:max-w-3xl mt-12 '>
            <div className='mt-12 text-sm'>
            <h4>Lorem, ipsum dolor.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quisquam corrupti possimus ipsam minus recusandae hic eius cupiditate laboriosam placeat sit, nisi voluptatum sapiente vel aperiam pariatur fuga itaque.</p>
            </div>
           
            <div className='w-full lg:w-80 lg:min-w-80 lg:aspect-[9/16] relative'>
           <img src={ben_img_63} alt='ben' className='w-full h-full object-cover'/>
            </div>
        </section>
      
        {/* <div className='h-80 aspect-[3/4] bg-gray-400 rounded-xl overflow-hidden'>

        </div> */}
      </div>
    </section>
    <section className='h-20 w-full bg-greeny flex items-center justify-center'>
          <h4 className='text-2xl font-bold text-center font-glock'>Explore more collaborations</h4>
    </section>
    
    </>
   
  )
}
