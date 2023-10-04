import React , {useState} from 'react'
import { motion , AnimatePresence } from 'framer-motion'

import {crew} from '../data.json' 

const SliderCrew = () => {
  const [Crew, setCrew] = useState("01")
  return (
    <div>
      <AnimatePresence>
      <div className="flex justify-center items-center xl:items-start w-full flex-col sm:flex-col-reverse xl:flex-row-reverse mt-10 sm:mt-16 xl:mt-0 max-sm:gap-8 gap-16">
        {crew.map(
          (c, i) =>
            Crew === c.id && (
              // get the image that match the state
              <motion.div
                key={c.id + i}
                className=" w-full flex justify-center xl:justify-end xl:self-center border-b-2 border-[#383B4B] xl:h-[690px]"
                animate={{ opacity: [0, 1], x: [300, 0] }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0 }}
              >
                <img
                  src={c.images.png} alt={c.name} 
                  className=' w-[170px] max-sm:h-56 sm:w-[300px] md:w-[450px] xl:w-full xl:min-h-[600px] self-end'
                />
              </motion.div>
            )
        )}
        <div className='flex self-center max-sm:flex-col-reverse flex-col gap-6 w-full'>
          <div className="flex flex-col max-sm:mb-8 gap-8 max-xl:self-center h-60 sm:max-w-[460px] lg:max-w-[650px] text-center xl:text-left h-54 lg:h-72">
            {crew.map(
              (c, i) =>
              // get the details that match the state
                Crew === c.id && (
                  <motion.div
                    key={c.id + i + 1}
                    animate={{ opacity: [0, 1], x: [-300, 0] }}
                    transition={{ duration: 0.9 }}
                    exit={{ opacity: 0}}
                  >
                    <h2 className="text-white opacity-50 font-bellefair uppercase text-base sm:text-2xl lg:text-[32px]">
                      {c.role}
                    </h2>
                    <h3 className="text-white font-bellefair uppercase text-2xl sm:text-[40px] lg:text-[56px] xl:w-[615px] xl:leading-10 mt-2 sm:mt-4 lg:mt-10">
                      {c.name}
                    </h3>
                    <p className="text-sec leading-[25px] sm:leading-7 lg:leading-8 break-words font-barlow text-[15px] sm:text-base lg:text-lg mt-4 sm:mt-6 lg:mt-12 xl:max-w-[450px]">
                      {c.bio}
                    </p>
                  </motion.div>
                )
            )}
          </div>
          {/* start the pagination */}
          <motion.ul
            className="flex gap-4 max-xl:self-center xl:mt-12"
            whileInView={{opacity : [0, 1] , x: [-300, 0]}}
            transition={{duration: 0.9}}
            viewport={{ once: true }}
          >
            {crew.map((c, i) => (
              <li
                key={c.id + 2}
                className={` w-[10px] h-[10px] bg-white opacity-[0.17] rounded-full hover:opacity-100 duration-300 cursor-pointer ${
                  Crew === c.id && "!opacity-100"
                } `}
                onClick={() => setCrew(c.id)}
              >
              </li>
            ))}
          </motion.ul>
          {/* start the pagination */}
        </div>
      </div>
    </AnimatePresence>
    </div>
  )
}

export default SliderCrew