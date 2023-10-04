import React from 'react';
import {motion} from 'framer-motion';

import Button from './Button';

const Hero = () => {
  return (
    <div className='flex min-h-section justify-center items-center md:mt-12 lg:mt-0'>
      <div className=' custom-container flex flex-col lg:flex-row lg:justify-between items-center text-center lg:text-left'>
        <motion.div 
          className='flex flex-col'
          whileInView={{opacity : [0 , 1] , x:[-200 , 0]}}
          transition={{duration: 0.7}}
        >
          <div className='flex flex-col-reverse'>
            <h1 className=' text-white text-[80px] sm:text-[150px] font-bellefair'>SPACE</h1>
            <h2 className=' text-sec text-base sm:text-xl lg:text-[28px] font-barlowcond tracking-[2.7px] sm:tracking-[3.38px] lg:tracking[4.72px] mb-1 sm:-mb-4 lg:mb-0'>SO, YOU WANT TO TRAVEL TO</h2>
          </div>
          <div className=' flex justify-center items-center sm:-mt-2'>
            <p className=' font-barlow text-sec text[15px] sm:text-base lg:text-lg leading-[25px] sm:leading[28px] lg:leading-8 break-words self-center max-w-sm sm:max-w-md lg:max-w-[29rem]'>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer 
              space and not hover kind of on the edge of it. Well sit back, and relax because we’ll 
              give you a truly out of this world experience!
            </p>
          </div>
        </motion.div>
        <Button />
      </div>
    </div>
  )
}

export default Hero