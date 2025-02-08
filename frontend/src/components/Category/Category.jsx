import React, { useState } from "react"
import './Category.scss'
import { useSelector } from "react-redux"
import translationsJSON from '../../assets/translations.json'
import FilmCard from "../FilmCardSlider/FilmCard/FilmCard"
import { fetchMoviesByParams } from "../../api/fetchFunctions"
import { useQuery } from "@tanstack/react-query"

export default function Category({ title }) {
    const translations = translationsJSON
    const language = useSelector((state) => state.client.language)

    const similarGenres = useSelector(state => state.client.similarGenres)

    let method = null

    switch (title) {
        case 'novelty':
            method = 'new'
            break
        case 'forYou':
            method = 'genre'
            break
        case 'top':
            method = 'top'
            break
        case 'oftenSearch':
            method = 'top'
            break
        case 'similar':
            method = 'similar'
            break
        case 'favorites':
            method = 'favorite'
            break
        default:
            method = 'new'
    }

    console.log(similarGenres);


    const { data, isError, isLoading } = useQuery({
        queryKey: [`movies-${title}`],
        queryFn: async () => fetchMoviesByParams(method, method === 'similar' && similarGenres),
    });

    const [visibleRows, setVisibleRows] = useState(5)

    if (isLoading) return <div>Loading...</div>
    if (isError || !data) return <div>Error loading data</div>

    const moviesPerRow = 6
    const moviesToRender = data.slice(0, visibleRows * moviesPerRow)

    const handleAddMore = () => {
        setVisibleRows((prev) => prev + 5)
    };

    const rows = []

    for (let i = 0; i < moviesToRender.length; i += moviesPerRow) {
        rows.push(moviesToRender.slice(i, i + moviesPerRow))
    }

    return (
        <section className="section section__category category">
            <div className="category__inner container">
                <div className="category__row category__row--title row">
                    <h1 className="category__title">{translations[language].collections[title]}</h1>
                </div>

                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="category__row category__row--content row">
                        {row.map((movie) => (
                            <FilmCard
                                key={movie.id}
                                params={{
                                    id: movie.id,
                                    title: movie.title,
                                    posterPath: movie.posterPath,
                                    genres: movie.genres,
                                    releaseDate: movie.releaseDate,
                                }}
                            />
                        ))}
                    </div>
                ))}

                {rows.length < 15 && (
                    <button
                        className="category__button--add-more"
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
                        {translations[language].collections.showMore}
                    </button>
                )}
            </div>
        </section>
    );
}