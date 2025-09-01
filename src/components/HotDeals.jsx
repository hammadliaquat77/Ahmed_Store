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
  { id: 1, title: "Pizza Deal", price: "$10", img: "/HotDeal/Deal_1.png" },
  { id: 2, title: "Burger Combo", price: "$7", img: "/HotDeal/Deal_1.png" },
  { id: 3, title: "Pasta Offer", price: "$12", img: "/HotDeal/Deal_1.png" },
  { id: 4, title: "Fries Pack", price: "$5", img: "/HotDeal/Deal_1.png" },
  { id: 5, title: "Cold Drink", price: "$3", img: "/HotDeal/Deal_1.png" },
  { id: 6, title: "Family Meal", price: "$20", img: "/HotDeal/Deal_1.png"},
]

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
