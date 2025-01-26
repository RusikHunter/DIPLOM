import React from "react"
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import translationsJSON from '../../assets/translations.json'
import { getGenresByIDs } from "../../api/fetchFunctions.js";
import { genresIDs } from '../../api/config.js'
import { changeFilmsPageGenresArray } from '../../store/reducers/clientReducer.js'
import './GenreFilter.scss'



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GenreFilter() {
    const dispatch = useDispatch()
    const translations = translationsJSON
    const language = useSelector(state => state.client.language)
    const swiperRef = useRef()

    // массив строк жанров, с помощью которых можно обращаться к локализациям
    const genres = getGenresByIDs(genresIDs, language) // ! todo GENRE_ALL

    // состояние для массива используемых жанров
    const [selectedGenres, setSelectedGenres] = useState([])

    useEffect(() => {
        dispatch(changeFilmsPageGenresArray(selectedGenres))
    }, [selectedGenres])

    // массив ссылок на label, каждый индекс массива совпадает с индексом отрендеренного чекбокса
    let labelRefs = []

    for (let i = 0; i < genres.length; ++i) {
        labelRefs.push(useRef(null))
    }

    // функция клика для каждого чекбокса, принимающая индекс и параметр isChecked
    const handleCheckboxToggle = (index, genre) => {
        const genreID = genre.slice(6)
        // обращается к состоянию массива с используемыми жанрами, если жанр есть - убирает, если нет - добавляет
        const updatedArr = selectedGenres.includes(genreID)
            ? selectedGenres.filter(item => item !== genreID)
            : [...selectedGenres, genreID]

        setSelectedGenres(updatedArr)

        console.log(updatedArr)

        // обращается к массиву ссылок на label и у совпадающего меняет класс наличие класса genre-filter__genre-label--checked
        labelRefs[index].current.classList.toggle('genre-filter__genre-label--checked')
    }

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev()
    }

    const handleNext = () => {
        swiperRef.current.swiper.slideNext()
    }

    return (
        <section className="section section__genre-filter genre-filter">
            <div className="genre-filter__inner container">
                <div className="genre-filter__row row">
                    <form className="genre-filter__form--genres">
                        <Swiper
                            ref={swiperRef}
                            className="genre-filter__swiper"
                            spaceBetween={15}
                            slidesPerView="auto"
                            slidesPerGroup={1}
                            loop={false}
                            speed={300}
                            simulateTouch={false}
                            allowTouchMove={false}
                        >
                            {genres.map((genre, index) => (
                                <SwiperSlide className="genre-filter__slide" key={index}>
                                    <label ref={labelRefs[index]} className="genre-filter__genre-label">
                                        <input
                                            type="checkbox"
                                            id={`genreFilterCheckbox${index}`}
                                            className="genre-filter__genre-checkbox"
                                            onClick={(e) => handleCheckboxToggle(index, genre)}
                                        />
                                        {/* здесь вместо создания объекта genreFilter использую данные из обхекта intro, чтобы не дублировать жанры в файле translations.json */}
                                        <span className="genre-filter__genre-title">
                                            {translations[language].intro[genre]}
                                        </span>
                                    </label>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </form>

                    <div className="genre-filter__navigation-wrap">
                        <button className="genre-filter__navigation-button--left" onClick={handlePrev}>
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.12807 17.5542L1.4989 9.59917L8.12807 1.64417" stroke="#767676" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="genre-filter__navigation-button--right" onClick={handleNext}>
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.7489 1.646L8.37808 9.601L1.7489 17.556" stroke="#767676" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}