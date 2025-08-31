import React, { useRef } from "react"

import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay" // auto-scroll plugin

const reviews = [
    {
        id: 1,
        name: "Ali Khan",
        review: "⭐⭐⭐⭐",
        description: "The power bank is amazing, charges my phone 3 times fully!",
        purchasedItems: ["20,000mAh Power Bank"],
        img: "/images/clients/ali.jpg", // client photo
    },
    {
        id: 2,
        name: "Sara Ahmed",
        review: "⭐⭐⭐⭐",
        description: "These wireless headphones have great sound quality and bass.",
        purchasedItems: ["Wireless Headphones"],
        img: "/images/clients/sara.jpg",
    },
    {
        id: 3,
        name: "Usman Malik",
        review: "⭐⭐⭐⭐",
        description: "The phone case is sturdy and protects my phone really well.",
        purchasedItems: ["Shockproof Phone Case"],
        img: "/images/clients/usman.jpg",
    },
    {
        id: 4,
        name: "Hina Fatima",
        review: "⭐⭐⭐⭐",
        description: "I love the fast charger, it charges my phone in under an hour!",
        purchasedItems: ["Fast Charger 65W"],
        img: "/images/clients/hina.jpg",
    },
    {
        id: 5,
        name: "Bilal Sheikh",
        review: "⭐⭐⭐⭐",
        description: "Great quality Type-C cable, very durable and affordable.",
        purchasedItems: ["Type-C Cable"],
        img: "/images/clients/bilal.jpg",
    },
    {
        id: 6,
        name: "Ayesha Noor",
        review: "⭐⭐⭐⭐",
        description: "Smartwatch is very stylish and battery life is impressive.",
        purchasedItems: ["Smartwatch Series 5"],
        img: "/images/clients/ayesha.jpg",
    },
];


function Review() {

    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
    });

    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

    return (
        <section className="md:h-[360px] w-[85%] mx-auto md:mt-20 mt-20">
            <h1 className="md:text-3xl text-2xl font-semibold mb-6 text-center">Customer Reviews</h1>

            <Carousel plugins={[plugin.current]} className="w-full ">
                <CarouselContent>
                    {reviews.map((review) => (
                        <CarouselItem key={review.id} className="basis-full sm:basis-1/2 lg:basis-1/3 p-2">
                            <div data-aos="fade-up" className="border rounded-xl shadow-md bg-[#2F3039] h-full flex flex-col justify-between text-white p-6">
                                <p className="text-sm mb-2">Our Customer Review</p>
                                <p className="text-sm mb-2">{review.review}</p>
                                <p className="text-xl mb-2">{review.description}</p>
                                <h2 className="font-semibold">{review.name}</h2>
                                <span className="text-xs text-gray-500">{review.purchasedItems.join(", ")}</span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="hidden  absolute -left-10 top-1/2 -translate-y-1/2" />
                <CarouselNext className="hidden absolute -right-10 top-1/2 -translate-y-1/2" />
            </Carousel>
        </section>
    )
}

export default Review
