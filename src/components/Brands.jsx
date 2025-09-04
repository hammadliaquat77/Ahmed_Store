// import React from 'react'

// function Brands() {
//   return (
//     <section className='w-[85%] mx-auto mt-[10px] pt-20 md:pt-0'>
//           <div className='w-full h-[100px]  shadow-lg '>
//             <marquee behavior="" direction="left">
//             <div className='flex md:justify-between gap-10'>
//                 <span className='text-3xl font-bold font-mono'>OPPO</span>
//                 <span className='text-3xl font-bold font-mono'>Vivo</span>
//                 <span className='text-3xl font-bold font-mono'>Samsung</span>
//                 <span className='text-3xl font-bold font-mono'>Apple</span>
//                 <span className='text-3xl font-bold font-mono'>Realme</span>
//                 <span className='text-3xl font-bold font-mono'>Ronian</span>
//             </div>
//             </marquee>
//           </div>
//     </section>
//   )
// }

// export default Brands







import React from "react";

function Brands() {
  return (
    <section className="w-[85%] mx-auto mt-[10px] pt-20 md:pt-0 overflow-hidden">
      <div className="w-full h-[100px] shadow-lg flex items-center overflow-hidden">
        <div className="marquee">
          <div className="track">
            <span className="text-3xl font-bold font-mono mx-10">OPPO</span>
            <span className="text-3xl font-bold font-mono mx-10">Vivo</span>
            <span className="text-3xl font-bold font-mono mx-10">Samsung</span>
            <span className="text-3xl font-bold font-mono mx-10">Apple</span>
            <span className="text-3xl font-bold font-mono mx-10">Realme</span>
            <span className="text-3xl font-bold font-mono mx-10">Ronian</span>

            {/* duplicate for infinite loop */}
            <span className="text-3xl font-bold font-mono mx-10">OPPO</span>
            <span className="text-3xl font-bold font-mono mx-10">Vivo</span>
            <span className="text-3xl font-bold font-mono mx-10">Samsung</span>
            <span className="text-3xl font-bold font-mono mx-10">Apple</span>
            <span className="text-3xl font-bold font-mono mx-10">Realme</span>
            <span className="text-3xl font-bold font-mono mx-10">Ronian</span>
          </div>
        </div>
      </div>

      <style>{`
        .marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .track {
          display: inline-flex;
          white-space: nowrap;
          will-change: transform;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default Brands;
