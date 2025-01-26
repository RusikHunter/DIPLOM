// FilmCardSlider.jsx
import React from "react";
import { useRef } from "react";
import "./FilmCardSlider.scss";
import FilmCard from "./FilmCard/FilmCard";
import translationsJSON from "../../assets/translations.json";
import { useSelector } from "react-redux";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FilmCardSlider({ title, movies }) {
    const translations = translationsJSON;
    const language = useSelector((state) => state.client.language);

    const swiperRef = useRef(null)

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev()
    }

    const handleNext = () => {
        swiperRef.current.swiper.slideNext()
    }

    return (
        <div className="film-card-slider">
            <div className="film-card-slider__wrap">
                <div className="film-card-slider__row film-card-slider__row--1 row">
                    <h2 className="film-card-slider__title">{title}</h2>
                    <a className="film-card-slider__link" href="#">
                        {translations[language].filmCardSlider.seeAll}
                    </a>

                    <div className="film-card-slider__navigation-wrap">
                        <button className="film-card-slider__navigation-button--left" onClick={handlePrev}>
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.12807 17.5542L1.4989 9.59917L8.12807 1.64417" stroke="#767676" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="film-card-slider__navigation-button--right" onClick={handleNext}>
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.7489 1.646L8.37808 9.601L1.7489 17.556" stroke="#767676" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="film-card-slider__row film-card-slider__row--2 row">
                    <Swiper ref={swiperRef}
                        spaceBetween={15}
                        slidesPerView="auto"
                        slidesPerGroup={3}
                        loop={false}
                        speed={300}
                        simulateTouch={false}
                        allowTouchMove={false}
                    >
                        {movies.map((film) => (
                            <SwiperSlide className="film-card-slider__slide" key={film.id}>
                                <FilmCard params={film} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    );
}