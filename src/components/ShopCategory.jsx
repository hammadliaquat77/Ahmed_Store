import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const deals = [
  { id: 1, title: "Pizza Deal", price: "$10", img: "" },
  { id: 2, title: "Burger Combo", price: "$7", img: "" },
  { id: 3, title: "Pasta Offer", price: "$12", img: "" },
  { id: 4, title: "Fries Pack", price: "$5", img: "" },
  { id: 5, title: "Cold Drink", price: "$3", img: "" },
  { id: 6, title: "Family Meal", price: "$20", img: "" },
  { id: 7, title: "Family Meal", price: "$20", img: "" },
  { id: 8, title: "Family Meal", price: "$20", img: "" },
  { id: 9, title: "Family Meal", price: "$20", img: "" },
]

function ShopCategory() {
  return (
    <section className="md:h-[500px] w-[85%] mx-auto">
      <div className="w-full flex flex-col">
        <h1 className="md:text-3xl text-2xl pt-8 md:pt-0 font-semibold mb-6 mt-8 text-center">
          Shop By Category
        </h1>

        {/* Wrapper div with background */}
        <div className="relative w-full bg-gray-100 rounded-2xl p-6 shadow-md">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {deals.map((deal) => (
                <CarouselItem
                  key={deal.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/6 flex justify-center"
                >
                  <div className="flex flex-col w-full items-center">
                    <div className="w-36 h-36 border rounded-full shadow-md flex flex-col items-center justify-center bg-white">
                      {/* Image ya icon */}
                    </div>
                    <span className="text-md font-semibold text-center mt-2">
                      {deal.title}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Buttons abhi bhi usi wrapper div ke andar hain */}
            <CarouselPrevious className="hidden sm:flex md:flex absolute -left-5 top-1/2 -translate-y-1/2" />
            <CarouselNext className="hidden sm:flex md:flex absolute -right-5 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default ShopCategory
