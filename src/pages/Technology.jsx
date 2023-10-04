import React from 'react'
import Header from '../components/Header'

import PageHeading from '../components/PageHeading'
import Slider from '../components/SliderTech'

const technology = () => {
  return (
    <div className=" bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop min-h-screen bg-no-repeat bg-cover justify-center items-center">
      <Header />
      <div className="flex flex-col min-h-section justify-center max-lg-items-center max-w-[1440px] m-auto">
        <div className='custom-container xl:!pl-32 !my-0'>
          <PageHeading num="03" content="SPACE LAUNCH 101" />
        </div>
        <Slider />
      </div>
    </div>
  )
}

export default technology