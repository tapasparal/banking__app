import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HeroSlider() {
    const slides = [
        "/images/mdcc7.jpg",
        "/images/mdcc4.png",
    ];

    return (
        <section className="h-64 md:h-80">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000 }}
            >
                {slides.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="h-64 md:h-80 bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            {/* <div className="h-full w-full bg-black/40 flex items-center justify-center">
                                <div className="text-center text-white px-4">
                                    <h2 className="text-3xl md:text-4xl font-bold">
                                        Welcome to Murshidabad District Central Cooperative Bank
                                    </h2>
                                    <p className="mt-2 max-w-2xl mx-auto">
                                        Serving the community since 1962 — Deposits, Loans, Customer Service & more.
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

