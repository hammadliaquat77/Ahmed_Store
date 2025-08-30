import React from 'react'

function Brands() {
  return (
    <section className='w-[85%] mx-auto mt-[10px]'>
          <div className='w-full h-[100px]  shadow-lg '>
            <marquee behavior="" direction="left">
            <div className='flex md:justify-between gap-10'>
                <span className='text-3xl font-bold font-mono'>OPPO</span>
                <span className='text-3xl font-bold font-mono'>Vivo</span>
                <span className='text-3xl font-bold font-mono'>Samsung</span>
                <span className='text-3xl font-bold font-mono'>Apple</span>
                <span className='text-3xl font-bold font-mono'>Realme</span>
                <span className='text-3xl font-bold font-mono'>Ronian</span>
            </div>
            </marquee>
          </div>
    </section>
  )
}

export default Brands