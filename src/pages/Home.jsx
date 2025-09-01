import React from 'react'
import Hero from '../components/Hero'
import Shipping_Section from '../components/Shipping_Section'
import HotDeals from '../components/HotDeals'
import ShopCategory from '@/components/ShopCategory'
import UvImages from '@/components/UvImages'
import Review from '@/components/Review'
import Brands from '@/components/Brands'

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className='md:w-[100%] bg-white min:h-[100%] mx-auto pt-16 '>
      
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
