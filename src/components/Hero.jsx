import React from "react";
import Image1 from "../assets/Hero/Image_4.png";
import Image2 from "../assets/Hero/Image_5.png";
import Image3 from "../assets/Hero/Image_6.png";
import Slider from "react-slick";
import BgImage from "../assets/Hero/Bg_7.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';


const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Flat 40% Off on Premium Phone Covers",
    description:
      "Protect your phone in style with trendy, durable, and slim-fit mobile covers. Limited-time offer!",
  },
  {
    id: 2,
    img: Image2,
    title: "Up to 30% Off on Smart Watches",
    description:
      "Track fitness, calls, and style with our latest range of smartwatches at unbeatable prices.",
  },
  {
    id: 3,
    img: Image3,
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
      style={{ backgroundImage: `url(${BgImage})`,  }}
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
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div data-aos="zoom-in" className="relative">
                    <img
                      src={data.img}
                      alt="hero"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto"
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


