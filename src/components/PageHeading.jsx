import React from 'react'
import { motion } from 'framer-motion'

const PageHeading = ({num , content}) => {
  return (
    <motion.div
      className=' self-start w-full'
      whileInView={{x:[-400 , 0] ,opacity: [0,1]}}
      transition={{duration: 0.7}}
      viewport={{ once: true }}
    >
      <h2 className='uppercase font-barlowcond tracking-[2.7px] sm:tracking-[3.38px] xl:tracking-[4.73px] text-white text-[16px] sm:text-xl xl:text-[28px] text-center sm:text-start '>
        <span className=' font-[700] mr-4 opacity-25 text-base sm:text-xl tracking-[2.7px] sm:tracking-[3.36px] xl:text-[28px] xl:tracking-[4.72px] '>{num}</span> {content}</h2>
    </motion.div>
  )
}

export default PageHeading