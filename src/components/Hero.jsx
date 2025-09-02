import React from "react";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';



const ImageList = [
  {
    id: 1,
    img: "/Hero/EarBuds.png",
    title: "Flat 40% Off on Premium Phone Covers",
    description:
      "Protect your phone in style with trendy, durable, and slim-fit mobile covers. Limited-time offer!",
  },
  {
    id: 2,
    img: "/Hero/HeadPhone.png",
    title: "Up to 30% Off on Smart Watches",
    description:
      "Track fitness, calls, and style with our latest range of smartwatches at unbeatable prices.",
  },
  {
    id: 3,
    img: "/Hero/Speaker.png",
    title: "Mega Sale on Earphones & Chargers",
    description:
      "Get crystal-clear sound and fast charging accessories with discounts up to 50% off.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };


  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
  });


  return (
    <div id="home"
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center w-full bg-cover bg-center pt-10 md:pt-0"
      style={{ backgroundImage: `url(${"/Hero/Bg_7.jpg"})`, }}
    >
      {/* overlay (optional) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0 relative z-10">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-1 sm:order-1">
                  <h1
                    data-aos="fade-down"
                    className="text-3xl sm:text-6xl lg:text-7xl font-bold text-white"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    className="text-sm text-white/90"
                  >
                    {data.description}
                  </p>
                  <div data-aos="fade-up">

                    <NavLink
                      to="/products"
                      className="relative cursor-pointer outline-none md:py-4 md:px-8 p-2 px-4 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
                    >
                      <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
                      Order Now
                    </NavLink>
                    
                  </div>
                </div>

                {/* image section */}
                <div className="order-1 sm:order-2 pt-6">
                  <div data-aos="zoom-in" className="relative">
                    <img
                      src={data.img}
                      alt="hero"
                      className="w-[250px] h-[250px] sm:h-[450px] sm:w-[450px] md:h-[400px] md:w-[400px] sm:scale-105 lg:scale-110 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;


