import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import translationsJSON from '../../assets/translations.json'
import './Search.scss'
import { getGenresByIDs } from "../../api/fetchFunctions.js";
import { genresIDs } from '../../api/config.js'
import { fetchMoviesByParamObject } from '../../api/fetchFunctions.js'
import { useQuery } from '@tanstack/react-query'

export default function Search() {
    const translations = translationsJSON
    const language = useSelector((state) => state.client.language)

    const genres = getGenresByIDs(genresIDs, language)
    const countries = ['en', 'de', 'ro', 'pl', 'es']

    const sortTypeFirstInputRef = useRef()
    const [sortType, setSortType] = useState('byRelevanceUP')
    const [year, setYear] = useState(1970)

    const filtersRowRef = useRef()
    const filterRefsArr = Array.from({ length: 4 }, () => useRef(null))

    const [params, setParams] = useState({
        query: "",
        with_genres: [],
        with_original_language: [],
        primary_release_year: 1970
    })













    useEffect(() => {
        console.log(params)
    }, [params])

    useEffect(() => {
        console.log(sortType)
    }, [sortType])

    useEffect(() => {
        if (sortTypeFirstInputRef.current) {
            sortTypeFirstInputRef.current.checked = true;
        }
    }, [])











    const { data } = useQuery({
        queryKey: ['movies-by-filter', params],
        queryFn: async () => fetchMoviesByParamObject(params),
    })

    console.log(data)
















    const handleToggleFiltersRow = () => {
        filtersRowRef.current.classList.toggle('search__row--disabled')
    }

    const handleToggleFilter = (id) => {
        const isAlreadyOpen = !filterRefsArr[id].current.classList.contains('search__dropdown-content-wrap--disabled')

        filterRefsArr.forEach((ref, index) => {
            if (ref.current) {
                ref.current.classList.add('search__dropdown-content-wrap--disabled')
            }
        })

        if (!isAlreadyOpen) {
            filterRefsArr[id].current.classList.remove('search__dropdown-content-wrap--disabled')
        }
    }

    const handleChangeTitle = (event) => {
        setParams((prevParams) => {
            return {
                ...prevParams,
                query: event.target.value
            }
        })
    }

    const handleGenreClick = (selectedGenre) => {
        setParams((prevParams) => {
            const isSelected = prevParams.with_genres.includes(selectedGenre);

            return {
                ...prevParams,
                with_genres: isSelected
                    ? prevParams.with_genres.filter(genre => genre !== selectedGenre)
                    : [...prevParams.with_genres, selectedGenre]
            }
        })
    }

    const handleCountryClick = (selectedCountry) => {
        setParams((prevParams) => {
            const isSelected = prevParams.with_original_language.includes(selectedCountry);

            return {
                ...prevParams,
                with_original_language: isSelected
                    ? prevParams.with_original_language.filter(country => country !== selectedCountry)
                    : [...prevParams.with_original_language, selectedCountry]
            }
        })
    }

    const handleChangeSortType = (type) => {
        setSortType(type)
    }

    const handleYearChange = (event) => {
        setYear(Number(event.target.value))
    }

    const handleYearParamChange = () => {
        setParams((prevParams) => ({
            ...prevParams,
            primary_release_year: year
        }))
    }

    const handleClearFilters = () => {
        setParams({
            with_genres: [],
            with_original_language: [],
            primary_release_year: 1970
        })

        document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
            input.checked = false
        })

        setYear(1970)
        sortTypeFirstInputRef.current.checked = "true"
        setSortType('byRelevanceUP')
    }






    return (
        <main className="main">
            <section className="section section__search search">
                <div className="search__inner container">
                    <div className="search__row search__row--1 row">
                        <h1 className="search__title">{translations[language].search.search}</h1>
                    </div>
                    <div className="search__row search__row--2 row">
                        <form className='search__form'>
                            <input type="text" className="search__form-input" placeholder={translations[language].search.search} onChange={handleChangeTitle} />
                        </form>

                        <button type="button" className="search__button--filter" onClick={handleToggleFiltersRow}>
                            <span>{translations[language].search.filter}</span>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7773 10.936L11.7998 14.2505L7.82227 10.936" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div ref={filtersRowRef} className="search__row search__row--3 row search__row--disabled">
                        <div className="search__column search__column--1 column">











                            <div className="search__dropdown search__dropdown--sort" onClick={() => handleToggleFilter(0)}>
                                <span>{translations[language].search.sortBy}</span>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7773 10.936L11.7998 14.2505L7.82227 10.936" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div ref={filterRefsArr[0]} className="search__dropdown-content-wrap search__dropdown-content-wrap--sort search__dropdown-content-wrap--disabled" onClick={(e) => e.stopPropagation()}>
                                    <div className="search__dropdown-content search__dropdown-content--sort">
                                        <label className="search__dropdown-element search__dropdown-element--sort" onChange={() => handleChangeSortType('byRelevanceUP')}>
                                            <input ref={sortTypeFirstInputRef} className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                            {translations[language].search.byRelevance}
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.22273 13.0641L12.2002 9.74951L16.1777 13.0641" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </label>
                                        <label className="search__dropdown-element search__dropdown-element--sort" onChange={() => handleChangeSortType('byRelevanceDOWN')}>
                                            <input className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                            {translations[language].search.byRelevance}
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.7773 10.9359L11.7998 14.2505L7.82227 10.9359" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </label>
                                        <label className="search__dropdown-element search__dropdown-element--sort" onChange={() => handleChangeSortType('byTMDBRatingUP')}>
                                            <input className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                            {translations[language].search.byTMDBRating}
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.22273 13.0641L12.2002 9.74951L16.1777 13.0641" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </label>
                                        <label className="search__dropdown-element search__dropdown-element--sort" onChange={() => handleChangeSortType('byTMDBRatingDOWN')}>
                                            <input className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                            {translations[language].search.byTMDBRating}
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.7773 10.9359L11.7998 14.2505L7.82227 10.9359" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </label>
                                        <label className="search__dropdown-element search__dropdown-element--sort" onChange={() => handleChangeSortType('byDateUP')}>
                                            <input className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                            {translations[language].search.byDate}
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.22273 13.0641L12.2002 9.74951L16.1777 13.0641" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </label>
                                        <label className="search__dropdown-element search__dropdown-element--sort" onChange={() => handleChangeSortType('byDateDOWN')}>
                                            <input className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                            {translations[language].search.byDate}
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.7773 10.9359L11.7998 14.2505L7.82227 10.9359" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>

                            </div>























                            <div className="search__dropdown search__dropdown--genre" onClick={() => handleToggleFilter(1)}>
                                <span>{translations[language].search.genre}</span>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7773 10.936L11.7998 14.2505L7.82227 10.936" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div ref={filterRefsArr[1]} className="search__dropdown-content-wrap search__dropdown-content-wrap--genre search__dropdown-content-wrap--disabled" onClick={(e) => e.stopPropagation()}>
                                    <div className="search__dropdown-content search__dropdown-content--genre">
                                        {genres.map((genre, index) => {
                                            return (
                                                <label key={index} className="search__dropdown-element search__dropdown-element--genre"
                                                    onChange={() => handleGenreClick(genre.slice(6))}>
                                                    <input className="search__dropdown-input search__dropdown-input--genre" type="checkbox" name="genre" value="relevance" />
                                                    {translations[language].intro[genre]}
                                                </label>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>

























                            <div className="search__dropdown search__dropdown--country" onClick={() => handleToggleFilter(2)}>
                                <span>{translations[language].search.country}</span>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7773 10.936L11.7998 14.2505L7.82227 10.936" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div ref={filterRefsArr[2]} className="search__dropdown-content-wrap search__dropdown-content-wrap--country search__dropdown-content-wrap--disabled" onClick={(e) => e.stopPropagation()}>
                                    <div className="search__dropdown-content search__dropdown-content--country">
                                        {countries.map((country, index) => {
                                            return (
                                                <label key={index} className="search__dropdown-element search__dropdown-element--country" onChange={() => handleCountryClick(country)}>
                                                    <input className="search__dropdown-input search__dropdown-input--country" type="checkbox" name="country" value="relevance" />
                                                    {translations[language].search[country]}
                                                </label>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>


















                            <div className="search__dropdown search__dropdown--year" onClick={() => handleToggleFilter(3)}>
                                <span>{translations[language].search.year}</span>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7773 10.936L11.7998 14.2505L7.82227 10.936" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div ref={filterRefsArr[3]} className="search__dropdown-content-wrap search__dropdown-content-wrap--year search__dropdown-content-wrap--disabled" onClick={(e) => e.stopPropagation()}>
                                    <div className="search__dropdown-content search__dropdown-content--year">
                                        <input className="search__dropdown-input search__dropdown-input--year"
                                            type="range"
                                            min="1900"
                                            max="2025"
                                            step="1"
                                            value={year}
                                            onInput={handleYearChange} />
                                        <span className="search__dropdown-span-year">{year}</span>

                                        <button className="search__dropdown-button--year" onClick={handleYearParamChange}>
                                            Застосувати
                                        </button>
                                    </div>
                                </div>


                            </div>









                        </div>
                        <div className="search__column search__column--2 column">
                            <button type="button" className="search__button--clear" onClick={handleClearFilters}>
                                <span>{translations[language].search.clear}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

