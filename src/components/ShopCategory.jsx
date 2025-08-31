import React from 'react'
import { Cable, Headphones, Smartphone, Battery, Watch, Speaker, Shield } from 'lucide-react'
import { BsEarbuds } from "react-icons/bs";

import AOS from 'aos';
import 'aos/dist/aos.css';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const deals = [
  { id: 1, title: "Power Bank", icon: Battery },
  { id: 2, title: "Wireless Headphones", icon: Headphones },
  { id: 3, title: "Phone Case", icon: Shield },
  { id: 4, title: "Fast Charger", icon: Battery },
  { id: 5, title: "Type-C Cable", icon: Cable },
  { id: 6, title: "Smartwatch", icon: Watch },
  { id: 7, title: "Bluetooth Speaker", icon: Speaker },
  { id: 8, title: "Screen Protector", icon: Shield },
  { id: 9, title: "Earbuds", icon: BsEarbuds },
]

function ShopCategory() {

      AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      });
  

  return (
    <section id='category' className="md:h-[500px] w-[85%] mx-auto">
      <div className="w-full flex flex-col">
        <h1 className="md:text-3xl text-2xl pt-8 md:pt-0 font-semibold mb-6 mt-8 text-center">
          Shop By Category
        </h1>

        {/* Carousel Wrapper */}
        <div className="relative w-full bg-gray-100 rounded-2xl p-6 shadow-md">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {deals.map((deal) => (
                <CarouselItem
                  key={deal.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/6 flex justify-center"
                  data-aos="zoom-in-up"
                >
                  <div className="flex flex-col w-full items-center">
                    <div className="w-36 h-36 border rounded-full shadow-md flex items-center justify-center bg-white">
                      {deal.icon && <deal.icon className="w-12 h-12 text-gray-700" />}
                    </div>
                    <span className="text-md font-semibold text-center mt-2">
                      {deal.title}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Controls */}
            <CarouselPrevious className="hidden sm:flex md:flex absolute -left-5 top-1/2 -translate-y-1/2" />
            <CarouselNext className="hidden sm:flex md:flex absolute -right-5 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default ShopCategory
