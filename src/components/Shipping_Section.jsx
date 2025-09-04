
import React from 'react'
import { IoCubeOutline } from "react-icons/io5";

import AOS from 'aos';
import 'aos/dist/aos.css';



function Shipping_Section() {

    AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    });
  

  return (
    <section className='md:w-[80%] w-[80%] mx-auto h-[400px] md:h-[200px] overflow-hidden'>
      <div className='main flex justify-between items-center h-[400px] md:h-[200px] sm:h-[300px]'>

        {/* sab cards parent me flex-between */}
        <div className='w-full grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-7 md:justify-between sm:justify-between items-center'>
        {/* <div className='w-full flex flex-col md:flex-row gap-7 md:justify-between sm:justify-between items-center'> */}

          {/* card 1 */}
          <div data-aos="fade-right" className='flex gap-4'>
            <div className='h-12 w-12 bg-zinc-200 rounded-full flex justify-center items-center'>
              <IoCubeOutline size={24} />
            </div>
            <div className='flex flex-col justify-center gap-1'>
              <h2 className='font-semibold'>Free Delivery</h2>
              <span className='text-[12px] tracking-tight font-sans text-zinc-600'>
                Only For Karachi
              </span>
            </div>
          </div>

          {/* card 2 */}
          <div data-aos="fade-right" className='flex gap-4'>
            <div className='h-12 w-12 bg-zinc-200 rounded-full flex justify-center items-center'>
              <IoCubeOutline size={24} />
            </div>
            <div className='flex flex-col justify-center gap-1'>
              <h2 className='font-semibold'>Flexible Payment</h2>
              <span className='text-[12px] tracking-tight font-sans text-zinc-600'>
                Pay With EasyPaisa Jazzcash
              </span>
            </div>
          </div>

          {/* card 3 */}
          <div data-aos="fade-right" className='flex gap-4'>
            <div className='h-12 w-12 bg-zinc-200 rounded-full flex justify-center items-center'>
              <IoCubeOutline size={24} />
            </div>
            <div className='flex flex-col justify-center gap-1'>
              <h2 className='font-semibold'>Best Quality</h2>
              <span className='text-[12px] tracking-tight font-sans text-zinc-600'>
                Quality Not Compromised
              </span>
            </div>
          </div>

          {/* card 4 */}
          <div data-aos="fade-right" className='flex gap-4'>
            <div className='h-12 w-12 bg-zinc-200 rounded-full flex justify-center items-center'>
              <IoCubeOutline size={24} />
            </div>
            <div className='flex flex-col justify-center gap-1'>
              <h2 className='font-semibold'>Premium Support</h2>
              <span className='text-[12px] tracking-tight font-sans text-zinc-600'>
                Outstanding Premium Support
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Shipping_Section
