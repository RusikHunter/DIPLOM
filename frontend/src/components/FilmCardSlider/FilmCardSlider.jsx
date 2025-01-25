import React from "react"
import { useRef } from "react"
import { useQuery } from "@tanstack/react-query"
import './FilmCardSlider.scss'
import FilmCard from "./FilmCard/FilmCard"
import translationsJSON from "../../assets/translations.json"
import { useSelector } from 'react-redux';
import { fetchMovies2025 } from '../../api/fetchFunctions.js'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';






export default function FilmCardSlider({ title }) {
    const translations = translationsJSON
    const language = useSelector(state => state.client.language)

    const swiperRef = useRef(null)

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev()
    }

    const handleNext = () => {
        swiperRef.current.swiper.slideNext()
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ['newFilms'],
        queryFn: fetchMovies2025,
    });

    if (!data || !data[0]) {
        return <div>No data available</div>
    }

    console.log(data)

    return (
        <div className="film-card-slider">
            <div className="film-card-slider__wrap">
                <div className="film-card-slider__row film-card-slider__row--1 row">
                    <h2 className="film-card-slider__title">{title}</h2>

                    <a className="film-card-slider__link" href="#">{translations[language].filmCardSlider.seeAll}</a>

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
                    {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! доделать slidesPerGroup */}
                    <Swiper
                        className="film-card-slider__swiper"
                        ref={swiperRef}
                        spaceBetween={15} // Расстояние между слайдами
                        slidesPerView="auto" // Включаем авторазмер слайдов
                        slidesPerGroup={3} // Прокручиваем по одному слайду
                        loop={false} // Отключаем бесконечный цикл
                        speed={300}
                        simulateTouch={false}
                        allowTouchMove={false}
                    >
                        {data.map((film, index) => (
                            <SwiperSlide className="film-card-slider__slide" key={index}>
                                <FilmCard params={film} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}