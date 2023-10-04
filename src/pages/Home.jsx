import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className='bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop min-h-screen bg-no-repeat bg-cover'>
      <Header />
      <Hero />
    </div>
  )
}

export default Home