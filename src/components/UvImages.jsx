import React from 'react'
import Power from "@/assets/UvImages/power.jpg";
import Headphone from "@/assets/UvImages/headphone.jpg";

function UvImages() {
  return (
    <section className='h-auto w-[85%] mx-auto pt-20 md:-mt-32 '>
        <div className='flex md:justify-between flex-col md:flex-row sm:flex-row gap-4'>
            <img src={Power} className='md:w-[48%] md:h-[600px] sm:w-[60%] sm:h-[300px] rounded-lg' alt="" />
            <img src={Headphone} className='md:w-[48%] md:h-[600px] w-[100%] sm:w-[60%] sm:h-[300px] rounded-lg' alt="" />
        </div>
    </section>
  )
}

export default UvImages