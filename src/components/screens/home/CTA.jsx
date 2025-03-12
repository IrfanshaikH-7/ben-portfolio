import React from 'react'
import Button from '../../core/Button'

export default function CTA() {
    return (
        <div className='h-fit md:px-12 md:py-12 py-12 px-4 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 md:gap-12'>
            <div className='flex flex-1 gap-4 flex-col items-start justify-start'>
                <div className='flex flex-col items-start justify-start'>
                    <h3 className='text-6xl mb-2 font-bold text-center font-glock'>Let's get in touch</h3>
                    <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                <div className='flex flex-col items-start justify-start w-full'>
                    <Button text={'text-center'}  className="flex w-full py-3  items-center font-medium border-none text-white bg-[#8EB486] " >
                        Connect
                    </Button>
                </div>
            </div>
            <div className="flex flex-1  justify-self-end">
                <div className=' w-full md:h-full h-20 bg-greeny flex items-center justify-center'>
                    <h3 className='text-2xl font-bold text-center font-glock'>Schedule a meet</h3>
                </div>
            </div>

        </div>
    )
}
