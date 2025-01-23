import React from "react"
import { useState, useRef } from "react"
import './FilmCardSlider.scss'
import FilmCard from "./FilmCard/FilmCard"
import tempBG from '../../assets/icons/tempBG.png'


// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function FilmCardSlider({ title }) {
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

                    <a className="film-card-slider__link" href="#">Дивитись усе</a>

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
                    <Swiper
                        className="film-card-slider__swiper"
                        ref={swiperRef}
                        spaceBetween={15} // Расстояние между слайдами
                        slidesPerView="auto" // Включаем авторазмер слайдов
                        slidesPerGroup={6} // Прокручиваем по одному слайду
                        loop={false} // Отключаем бесконечный цикл
                        speed={700}
                        simulateTouch={false}
                        allowTouchMove={false}
                    >
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                        <SwiperSlide className="film-card-slider__slide"><FilmCard /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}