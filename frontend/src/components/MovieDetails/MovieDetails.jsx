import React from "react"
import './MovieDetails.scss'
import { useState } from "react"
import { useSelector } from "react-redux"
import translationsJSON from '../../assets/translations.json'
import tempBG from '../../assets/icons/bg-temp.png'
import avatar from '../../assets/icons/avatar.png'

export default function MovieDetails({ data }) {
    const language = useSelector(state => state.client.language)
    const translations = translationsJSON
    const movieData = data
    const reviewsProSite = 5

    const [visibleReviewsCount, setVisibleReviewsCount] = useState(reviewsProSite)

    const reviews = []

    for (let i = 0; i < movieData.reviewsCount; ++i) {
        reviews.push({
            author: 'author123',
            text: `Nice movie`
        })
    }

    const handleAddMore = () => {
        setVisibleReviewsCount(prev => prev + reviewsProSite)
    }

    const visibleReviews = reviews.slice(0, visibleReviewsCount)

    return (
        <section className="section section__movie-details movie-details">
            <div className="movie-details__inner container">
                <div className="movie-details__row movie-details__row--1 row">
                    <div className="movie-details__column movie-details__column--1 column">
                        <div className="movie-details__info-wrap">
                            <h5 className="movie-details__title">{translations[language].movieDetails.info}</h5>

                            <dl className="movie-details__info-description-list">
                                <div className="movie-details__info-description-list-item-wrap">
                                    <dt className="movie-details__info-description-term">{translations[language].movieDetails.director}:</dt>
                                    <dd className="movie-details__info-description-definition">
                                        {movieData.directors.map((director, index) => (
                                            <span key={index}>{director.name}</span>
                                        ))}
                                    </dd>
                                </div>

                                <div className="movie-details__info-description-list-item-wrap">
                                    <dt className="movie-details__info-description-term">{translations[language].movieDetails.writers}:</dt>
                                    <dd className="movie-details__info-description-definition">
                                        {movieData.writers.map((writer, index) => (
                                            <span key={index}>{writer.name}</span>
                                        ))}
                                    </dd>
                                </div>


                                <div className="movie-details__info-description-list-item-wrap">
                                    <dt className="movie-details__info-description-term">{translations[language].movieDetails.actors}:</dt>
                                    <dd className="movie-details__info-description-definition">
                                        {movieData.actors.map((actor, index) => (
                                            <span key={index}>{actor.name}</span>
                                        ))}
                                    </dd>
                                </div>


                                <div className="movie-details__info-description-list-item-wrap">
                                    <dt className="movie-details__info-description-term">{translations[language].movieDetails.countries}:</dt>
                                    <dd className="movie-details__info-description-definition">
                                        {movieData.countries.map((country, index) => (
                                            <span key={index}>{country.name}</span>
                                        ))}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="movie-details__column movie-details__column--2 column">
                        <div className="movie-details__info-wrap">
                            <h5 className="movie-details__title">{translations[language].movieDetails.translate}</h5>

                            <ul className="movie-details__info-list">
                                {movieData.languages.map((language, index) => (
                                    <li className="movie-details__info-list-item" key={index}>
                                        <span>{language.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="movie-details__info-wrap">
                            <h5 className="movie-details__title">{translations[language].movieDetails.subtitles}</h5>

                            <ul className="movie-details__info-list">
                                {movieData.languages.map((language, index) => (
                                    <li className="movie-details__info-list-item" key={index}>
                                        <span>{language.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="movie-details__row movie-details__row--2 row">
                    <div className="movie-details__column movie-details__column--3 column">
                        <h5 className="movie-details__title">{translations[language].movieDetails.trailerAndImages}</h5>

                        <div className="movie-details__images-block">
                            <img src={tempBG} className="movie-details__image movie-details__image--a" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--b" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--c" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--d" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--e" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--f" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--g" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--h" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--i" alt="image" width={245} height={131} />
                        </div>
                    </div>
                </div>
                <div className="movie-details__row movie-details__row--3 row">
                    <div className="movie-details__column movie-details__column--4 column">
                        <div className="movie-details__text-wrap">
                            <h5 className="movie-details__title">{translations[language].movieDetails.reviews}</h5>

                            <span className="movie-details__reviews-count">{movieData.reviewsCount}</span>
                        </div>

                        <div className="movie-details__reviews-wrap">
                            <form className="movie-details__review-form">
                                <img src={avatar} className="movie-details__review-image--my-account" alt="avatar" />

                                <input className="movie-details__review-input--text" type="text" placeholder={translations[language].movieDetails.writeReview} />

                                <button className="movie-details__review-button--submit">
                                    {translations[language].movieDetails.send}
                                </button>
                            </form>

                            <ul className="movie-details__review-list">
                                {reviews.length > 0
                                    ? (
                                        visibleReviews.map((review, index) => (
                                            <li className="movie-details__review" key={index}>
                                                <img src={avatar} className="movie-details__review-image" alt="avatar" width={48} height={48} />

                                                <div className="movie-details__review-author-info-wrap">
                                                    <span className="movie-details__review-author-username">
                                                        {review.author}
                                                    </span>

                                                    <p className="movie-details__review-text">
                                                        {review.text}
                                                    </p>
                                                </div>
                                            </li>
                                        ))
                                    )
                                    : (<span className="movie-details__review--no-reviews">{translations[language].movieDetails.noReviews}</span>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {reviews.length > 0 && visibleReviews.length < reviews.length && <div className="movie-details__row movie-details__row--4 row">
                    <button
                        className="movie-details__button--add-more"
                        onClick={handleAddMore}
                    >
                        <svg
                            width="38"
                            height="36"
                            viewBox="0 0 38 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M32.8443 10.0278C30.0644 5.22876 24.8685 2 18.9176 2C12.1703 2 6.39372 6.1507 4.00867 12.0347M27.9612 12.0347H36V4.00695M5.15575 26.0833C7.93564 30.8824 13.1315 34.1111 19.0824 34.1111C25.8297 34.1111 31.6063 29.9604 33.9913 24.0764M10.0388 24.0764H2V32.1042"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {translations[language].movieDetails.showMore}
                    </button>
                </div>}
            </div>
        </section >
    )
}

