import React , {useState} from 'react'
import { motion , AnimatePresence } from 'framer-motion'

import {destinations} from '../data.json'

const SliderDest = () => {
  const [slider, setSlider] = useState("Moon")
  return (
    <AnimatePresence>
      <div className="flex justify-center items-center xl:items-start xl:justify-between w-full flex-col xl:flex-row mt-10 sm:mt-16 gap-16 xl:gap-0">
        {destinations.map(
          (dest, i) =>
          // get the image that match the state
            slider === dest.name && (
              <motion.div
                key={dest.name + i}
                className=" w-full flex justify-center xl:justify-start xl:mt-24 xl:ml-16 object-contain"
                animate={{ opacity: [0, 1], x: [-300, 0] }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0 }}
              >
                <img
                  src={dest.images.png} alt={dest.name} 
                  className=' w-[170px] sm:w-[300px] lg:w-auto'
                />
              </motion.div>
            )
        )}
        <div className="flex flex-col gap-8 w-full items-center xl:items-start sm:max-w-[550px] xl:max-w-[450px] text-center xl:text-left xl:mt-16">
          {/* start the pagination */}
          <motion.ul
            className="flex gap-6 sm:gap-8 text-sm sm:text-base lg:text-base text-sec font-barlowcond xl:tracking-[2.7px] tracking-[2.36px] uppercase"
            whileInView={{opacity : [0, 1] , x: [300, 0]}}
            transition={{duration: 0.9}}
            viewport={{ once: true }}
          >
            {destinations.map((dest, i) => (
              <li
                key={dest.name}
                className={`slider-hover-line ${
                  slider === dest.name && " before:w-full before:opacity-100"
                } `}
                onClick={() => setSlider(dest.name)}
              >
                {dest.name}
              </li>
            ))}
          </motion.ul>
          {/* end the pagination */}
          {destinations.map(
            (dest, i) =>
            // get the details that match the state
              slider === dest.name && (
                <motion.div
                  key={dest.name + i + 1}
                  animate={{ opacity: [0, 1], x: [300, 0] }}
                  transition={{ duration: 0.9 }}
                  exit={{ opacity: 0}}
                >
                  <h2 className="text-white font-bellefair uppercase text-[56px] sm:text-[80px] lg:text-[100px]">
                    {dest.name}
                  </h2>
                  <p className="text-sec leading-8 break-words font-barlow text-[15px] sm:text-base lg:text-lg mb-12">
                    {dest.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-8 sm:gap-20 border-t-[1px] border-[#383B4B] pt-6">
                    <div className="flex flex-col gap-2">
                      <h3 className=" uppercase text-sec text-sm tracking-[2.36px] font-barlowcond">
                        AVG. DISTANCE
                      </h3>
                      <h4 className=" text-white uppercase text-[28px] font-bellefair">
                        {dest.distance}
                      </h4>
                    </div>
                    <div className=" flex flex-col gap-2">
                      <h3 className=" uppercase text-sec text-sm tracking-[2.36px] font-barlowcond">
                        Est. travel time
                      </h3>
                      <h4 className=" text-white uppercase text-[28px] font-bellefair">
                        {dest.travel}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default SliderDest