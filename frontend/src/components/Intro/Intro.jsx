import React from "react"
import { Link } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import './Intro.scss'
import translationsJSON from "../../assets/translations.json"
import { useSelector } from 'react-redux';
import { getGenresByIDs, fetchMainPageMovie } from '../../api/fetchFunctions.js'
import { rootPath } from "../../api/config";

export default function Intro() {
    // localisation
    const translations = translationsJSON
    const language = useSelector(state => state.client.language)
    const filmsPageGenresArray = useSelector(state => state.client.filmsPageGenresArray)

    const { data, isLoading, error } = useQuery({
        queryKey: ['mainFilm', filmsPageGenresArray],
        queryFn: () => fetchMainPageMovie(filmsPageGenresArray.length === 0 ? '80,18' : filmsPageGenresArray),
    });

    // ! todo доделать эти компоненты, потому что когда рендерится, то происходит смещение, ну крч я пойму 100%
    // ! а то щас непонятно объясняю
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error occurred while fetching data: {error.message}</div>

    const movieData = {
        id: data.id,
        backDropPath: `${rootPath}${data.backdrop_path}`,
        posterPath: `${rootPath}${data.poster_path}`,
        title: language === 'en' ? data.title.en : data.title.ua,
        year: data.release_date.slice(0, 4),
        hours: Math.floor(data.runtime / 60),
        minutes: data.runtime - (Math.floor(data.runtime / 60) * 60),
        adult: data.adult ? '18+' : '0+',
        rating: data.vote_average.toFixed(1),
        description: language === "en" ? data.overview.en : data.overview.ua,
        likes: Math.ceil(data.vote_count * 0.85),
        dislikes: data.vote_count - Math.ceil(data.vote_count * 0.85),
        genres: getGenresByIDs(data.genres)
    }

    return (
        <>
            <section className='section section__intro intro' style={{ backgroundImage: `url(${movieData.backDropPath})` }}>
                <div className="intro__inner container">
                    <div className="intro__row row">
                        <div className="intro__column intro__column--1 column">
                            <Link to={`/movie/${movieData.id}`} >
                                <img src={movieData.posterPath} width={345} height={511} />
                            </Link>
                        </div>
                        <div className="intro__column intro__column--2 column">
                            <div className="intro__title-wrap">
                                <h1 className='intro__title'>{movieData.title}</h1>

                                <span className='intro__year'>{movieData.year}</span>
                            </div>

                            <div className="intro__statistic">
                                <span className="intro__time">{movieData.hours} {translations[language].intro.hours} {movieData.minutes} {translations[language].intro.minutes}</span>

                                <span className="intro__censure">{movieData.adult}</span>

                                <span className="intro__rating">IMDb: {movieData.rating}</span>
                            </div>

                            <div className="intro__genre-list">
                                {movieData.genres.map((genre, index) => (
                                    <div className="intro__genre" key={index}>
                                        <span className="intro__genre-title">{translations[language].intro[genre]}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="intro__description-wrap">
                                <p className="intro__description">
                                    {movieData.description}
                                </p>
                            </div>

                            <div className="intro__tools">
                                <button className="intro__button--play">
                                    <Link to={`/movie/${movieData.id}`} >
                                        {translations[language].intro.view}
                                    </Link>
                                </button>

                                <button className="intro__button--add-to-favorites">
                                    <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.25 19.9989H19.5M19.5 19.9989H12.75M19.5 19.9989V26.7489M19.5 19.9989L19.5 13.2489M37.5 20C37.5 29.9411 29.4411 38 19.5 38C9.55888 38 1.5 29.9411 1.5 20C1.5 10.0589 9.55888 2 19.5 2C29.4411 2 37.5 10.0589 37.5 20Z" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </button>

                                <button className="intro__button--like">
                                    <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.5 16H33.028C33.7097 16 34.3801 16.1743 34.9756 16.5062C35.5711 16.8382 36.0718 17.3168 36.4303 17.8967C36.7887 18.4766 36.993 19.1385 37.0238 19.8195C37.0546 20.5006 36.9107 21.1782 36.606 21.788L29.606 35.788C29.2737 36.4529 28.7628 37.0121 28.1304 37.4028C27.498 37.7936 26.7693 38.0003 26.026 38H17.992C17.666 38 17.34 37.96 17.022 37.88L9.5 36M23.5 16V6C23.5 4.93913 23.0786 3.92172 22.3284 3.17157C21.5783 2.42143 20.5609 2 19.5 2H19.31C18.31 2 17.5 2.81 17.5 3.81C17.5 5.238 17.078 6.634 16.284 7.822L9.5 18V36M23.5 16H19.5M9.5 36H5.5C4.43913 36 3.42172 35.5786 2.67157 34.8284C1.92143 34.0783 1.5 33.0609 1.5 32V20C1.5 18.9391 1.92143 17.9217 2.67157 17.1716C3.42172 16.4214 4.43913 16 5.5 16H10.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className='intro__like--count'>{movieData.likes}</span>
                                </button>

                                <button className="intro__button--dislike">
                                    <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.498 4L21.978 2.12C21.6608 2.0405 21.3351 2.0002 21.008 2H12.972C12.229 2.00003 11.5007 2.20699 10.8688 2.59768C10.2368 2.98838 9.72615 3.54737 9.39403 4.212L2.39403 18.212C2.0893 18.8218 1.94548 19.4994 1.97624 20.1805C2.007 20.8615 2.21131 21.5234 2.56978 22.1033C2.92825 22.6832 3.42898 23.1618 4.02443 23.4938C4.61988 23.8257 5.2903 24 5.97203 24H15.5H19.5M29.498 4L29.5 22L22.716 32.176C21.922 33.366 21.5 34.762 21.5 36.192C21.5 37.19 20.69 38 19.69 38H19.498C18.4372 38 17.4198 37.5786 16.6696 36.8284C15.9195 36.0783 15.498 35.0609 15.498 34V24M29.498 4H33.5C34.5609 4 35.5783 4.42143 36.3285 5.17157C37.0786 5.92172 37.5 6.93913 37.5 8V20C37.5 21.0609 37.0786 22.0783 36.3285 22.8284C35.5783 23.5786 34.5609 24 33.5 24H28.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className='intro__dislike--count'>{movieData.dislikes}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}