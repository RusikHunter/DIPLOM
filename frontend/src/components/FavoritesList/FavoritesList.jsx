import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axios from "axios";
import '../Category/Category.scss'
import { fetchFavoriteMovies } from "../../api/fetchFunctions";
import translationsJSON from '../../assets/translations.json'
import FilmCard from '../FilmCardSlider/FilmCard/FilmCard'

export default function FavoritesList() {
    const language = useSelector(state => state.client.language)
    const currentUser = useSelector(state => state.client.currentUser)
    const translations = translationsJSON

    const { data, isError, isLoading } = useQuery({
        queryKey: [`favorite-movies`, currentUser],
        queryFn: async () => fetchFavoriteMovies(currentUser.favoriteMovies),
        enabled: currentUser.favoriteMovies !== undefined
    })

    if (isLoading) return <React.Fragment />
    if (isError || !data) return <React.Fragment />

    const dataToRow1 = data.slice(0, 6)
    const dataToRow2 = data.slice(6)

    return (
        <>
            <section className="section section__category category">
                <div className="category__inner container">
                    <div className="category__row category__row--title row">
                        <h1 className="category__title">{translations[language].collections.favorites}</h1>
                    </div>

                    {data.length > 0
                        ?
                        <>
                            <div key={0} className="category__row category__row--content-start category__row--content category__row--content--1 row">
                                {dataToRow1.map(movie => (
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

                            {dataToRow2.length > 0
                                ?
                                <div key={1} className="category__row category__row--content-start category__row--content category__row--content--2 row">
                                    {dataToRow2.map(movie => (
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
                                :
                                <></>
                            }
                        </>
                        :
                        <p className="category__text--no-content">{translations[language].collections.noContent}</p>
                    }
                </div>
            </section>
        </>
    )
}