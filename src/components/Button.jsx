import React from 'react';
import {motion} from 'framer-motion';

const Button = () => {
  return (
    <motion.div
      className='custom-btn'
      whileInView={{opacity : [0 , 1] , x:[200 , 0]}}
      transition={{duration: 0.8}}
    >
      <button className=' text-pri font-bellefair text-xl sm:text-[32px] tracking[1.25px] md:tracking-[2px]'>
        EXPLORE
      </button>
    </motion.div>
  )
}

export default Button