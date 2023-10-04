import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { technology } from "../data.json";

const SliderTech = () => {
  const [techSlide, setTechSlide] = useState("001");
  return (
    <div>
      <AnimatePresence>
        <div className="flex justify-start items-center xl:items-start w-full flex-col sm:flex-col xl:flex-row-reverse mt-10 sm:mt-16 xl:mt-0 max-sm:gap-8 gap-16">
          {technology.map(
            (tech, i) =>
              techSlide === tech.id && (
                <motion.div
                // get the image that match the state and add it as background that changes between portrait and landscape according to screen size
                  key={tech.id + i}
                  className=" max-xl:w-full"
                  animate={{ opacity: [0, 1], x: [300, 0] }}
                  transition={{ duration: 0.7 }}
                  exit={{ opacity: 0 }}
                >
                  <div
                    className= {`w-full h-[170px] sm:h-[310px] md:h-[420px] lg:h-[520px] xl:w-[515px] xl:h-[530px] bg-cover bg-center max-xl:bg-[image:var(--landscape)] xl:bg-[image:var(--portrait)]`}
                    style={{'--portrait' : `url(${tech.images.portrait})` , '--landscape' : `url(${tech.images.landscape})`}}
                  ></div>
                </motion.div>
              )
          )}
          <div className="flex self-center max-xl:flex-col gap-6">
            {/* start the pagination */}
            <motion.ul
              className="flex xl:flex-col gap-4 lg:gap-10 max-xl:self-center xl:mr-10"
              whileInView={{ opacity: [0, 1], x: [-300, 0] }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              {technology.map((tech, i) => (
                <li
                  key={tech.id + 2}
                  className={` w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] border-white border-2 border-opacity-25 sm:text-2xl lg:text-[32px] rounded-full 
                hover:border-opacity-100 duration-300 flex justify-center items-center text-white cursor-pointer ${
                  techSlide === tech.id && "opacity-100 bg-white !text-black"
                } `}
                  onClick={() => setTechSlide(tech.id)}
                >
                  {i + 1}
                </li>
              ))}
            </motion.ul>
            {/* start the pagination */}
            <div className="flex flex-col max-xl:m-4 max-xl:mb-20  gap-8 max-xl:self-center sm:h-60 sm:max-w-[460px] lg:max-w-[550px] text-center xl:text-left h-54 lg:h-72">
              {technology.map(
                // get the details that match the state
                (tech, i) =>
                  techSlide === tech.id && (
                    <motion.div
                      key={tech.id + i + 1}
                      animate={{ opacity: [0, 1], x: [-300, 0] }}
                      transition={{ duration: 0.9 }}
                      exit={{ opacity: 0 }}
                    >
                      <h2 className="text-white opacity-50 font-barlowcond uppercase text-sm tracking-[2.36px] sm:text-base sm:tracking-[2.7px] lg:text-[32px]">
                        THE TERMINOLOGY…
                      </h2>
                      <h3 className="text-white font-bellefair uppercase text-2xl sm:text-[40px] lg:text-[56px] xl:w-[500px] mt-2 sm:mt-4 lg:mt-10">
                        {tech.name}
                      </h3>
                      <p className="text-sec leading-[25px] break-words font-barlow text-[15px] sm:text-base sm:leading-7 lg:text-lg mt-4 sm:mt-6 lg:mt-12 xl:max-w-[445px]">
                        {tech.description}
                      </p>
                    </motion.div>
                  )
              )}
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default SliderTech;
