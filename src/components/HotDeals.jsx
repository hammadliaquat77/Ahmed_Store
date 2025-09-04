// import Cover from "@/assets/HotDeal/Deal_1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const deals = [
  { id: 1, title: "EarBUds", price: "Rs.2500", img: "../Products/Earbuds/EarBuds_10.webp" },
  { id: 2, title: "Smart Watch", price: "Rs.2300", img: "../Products/Watches/Watch_2.webp" },
  { id: 3, title: "Chargers", price: "RS.1400", img: "../Products/Chargers/Charger_1.webp" },
  { id: 4, title: "Speakers", price: "Rs.1500", img: "../Products/Speakers/Speaker_2.webp" },
  { id: 5, title: "Cover", price: "RS.500", img: "../Products/Covers/Cover_1.webp" },
  { id: 6, title: "HeadPhone", price: "Rs.1500", img: "../Products/Accessories/HeadPhone_1.webp" },
];

function HotDeals() {

      AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      });
  

  return (
    <section id="deals" className="md:h-[360px] w-[85%] mx-auto">
      <div className="w-full flex flex-col">
        <h1 className="md:text-3xl text-2xl font-semibold mb-6 mt-8">Hot Deals</h1>

        {/*  Carousel */}
        <div className="w-full relative">
          <Carousel
            opts={{ align: "start" }}
            className="w-full"
          >
            <CarouselContent>
              {deals.map((deal) => (
                <CarouselItem
                  key={deal.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/4"
                  data-aos="flip-right"
                >
                  <div className="p-4 border rounded-xl shadow-md flex flex-col items-center justify-center bg-white">
                    <img
                      src={deal.img}
                      alt={deal.title}
                      className="w-32 h-32 object-cover mb-3 rounded-md"
                    />
                    <h2 className="text-lg font-semibold">{deal.title}</h2>
                    <p className="text-gray-600">{deal.price}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/*  Carousel controls */}
            <CarouselPrevious className="hidden sm:flex md:flex absolute -left-10 top-1/2 -translate-y-1/2"  />
            <CarouselNext className="hidden sm:flex md:flex absolute -right-10 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default HotDeals
