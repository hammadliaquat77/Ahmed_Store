import React from 'react'
import Hero from '../components/Hero'
import Shipping_Section from '../components/Shipping_Section'
import HotDeals from '../components/HotDeals'
import ShopCategory from '@/components/ShopCategory'
import UvImages from '@/components/UvImages'
import Review from '@/components/Review'
import Brands from '@/components/Brands'

const Home = () => {
  return (
    <section className='md:w-[100%] bg-white min:h-[100%] mx-auto pt-16'>
      {/* <div>hello</div> */}
      <Hero/>
      <Shipping_Section/>
      <HotDeals/>
      <ShopCategory/>
      <UvImages/>
      <Review/>
      <Brands/>
      
    </section>
  )
}

export default Home
