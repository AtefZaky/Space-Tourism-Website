import React from 'react'
import Header from '../components/Header'

import PageHeading from '../components/PageHeading'
import Slider from '../components/SliderCrew'

const crew = () => {
  return (
    <div className=" bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop min-h-screen bg-no-repeat bg-cover">
      <Header />
      <div className="custom-container flex flex-col min-h-section w-full justify-center max-lg-items-center">
        <PageHeading num="02" content="Meet your crew" />
        <Slider />
      </div>
    </div>
  )
}

export default crew
