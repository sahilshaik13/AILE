"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import Image from "next/image"

interface Event {
  title: string
  date: string
  image: string
  link: string
}

const events: Event[] = [
  { 
    title: "AppIgnite Learning", 
    date: "April 27, 2025", 
    image: "/events/appignite-learning-poster.png",
    link: "#" // Placeholder URL
  },
  { 
    title: "AppIgnite Learning Summer Camp", 
    date: "May 12, 2025", 
    image: "/events/appignite-learning-summer-camp.jpg",
    link: "https://aile-registrations.vercel.app/"
  }
]

export default function EventsSection() {
  return (
    <div>
      <section className="py-10">
        {/* Visible top border */}
        <div className="border-t-4 border-gray-400 w-3/4 mx-auto mb-4"></div>

        <p className="text-center text-gray-500">Don't miss our upcoming events! Click on the images to interact!</p>
        <br></br>
        <h2 className="text-2xl font-bold text-center">Upcoming Events</h2>
        <br />

        <div className="flex justify-center">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true} // Enables infinite scrolling
            autoplay={{ delay: 2500, disableOnInteraction: false }} // Continuous autoplay
            modules={[Autoplay]}
            className="max-w-lg mx-auto"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="text-center">
                  <a href={event.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={600}
                      height={300}
                      className="rounded-lg mx-auto transition-transform hover:scale-105"
                      unoptimized
                    />
                  </a>
                  <h3 className="text-xl font-semibold mt-4">{event.title}</h3>
                  <p className="text-gray-300">{event.date}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}