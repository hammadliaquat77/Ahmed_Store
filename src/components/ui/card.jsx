import React from 'react'

function card() {
  return (
    <>
     <div className='w-[200px] h-[250px] bg-zinc-300 mx-auto'>
           <div className='flex flex-col justify-center items-center'>
            <img src={Cover} alt="" className='w-[180px] h-[180px] object-cover' />
            <p>Case with meg safe</p>
            <span>$100</span>
           </div>
         </div>
    </>
  )
}

export default card