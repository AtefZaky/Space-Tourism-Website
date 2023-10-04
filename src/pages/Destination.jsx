import React from 'react'
import Header from '../components/Header'

import PageHeading from '../components/PageHeading'
import Slider from '../components/SliderDest'

const destination = () => {
  return (
    <div className=" bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop min-h-screen bg-no-repeat bg-cover">
      <Header />
      <div className="custom-container flex flex-col min-h-section w-full justify-center items-center">
        <PageHeading num="01" content="Pick your destination" />
        <Slider />
      </div>
    </div>
  );
}

export default destination