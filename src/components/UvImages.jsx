import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';


function UvImages() {

      AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      });
  

  return (
    <section className='h-auto w-[85%] mx-auto pt-20 md:-mt-32 overflow-hidden '>
        <div className='flex md:justify-between flex-col md:flex-row sm:flex-row gap-4'>
            <img data-aos="fade-right" src={"/UvImages/power.jpg"} className='md:w-[48%] md:h-[600px] sm:w-[60%] sm:h-[300px] rounded-lg' alt="" />
            <img data-aos="fade-left" src={"/UvImages/headphone.jpg"} className='md:w-[48%] md:h-[600px] w-[100%] sm:w-[60%] sm:h-[300px] rounded-lg' alt="" />
        </div>
    </section>
  )
}

export default UvImages