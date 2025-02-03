// FilmCard.jsx
import React from "react";
import "./FilmCard.scss";
import { useSelector } from "react-redux";
import translationsJSON from "../../../assets/translations.json";
import { getGenresByIDs } from "../../../api/fetchFunctions";
import { Link } from "react-router-dom";
import backgroundFilmCard from '../../../assets/icons/backgroundFilmCard.png'

export default function FilmCard({ params }) {
    const language = useSelector((state) => state.client.language);
    const translations = translationsJSON;

    const { id, posterPath, title, releaseDate, genres } = params;

    const movieData = {
        id,
        posterPath,
        title: language === "en" ? title.en : title.ua,
        year: releaseDate ? releaseDate.slice(0, 4) : "Unknown",
        genres: getGenresByIDs(genres),
    };

    return (
        <div className="film-card">
            <Link to={`/movie/${movieData.id}`} >
                <img src={movieData.posterPath !== 'https://www.themoviedb.org/t/p/original/null' ? movieData.posterPath : backgroundFilmCard} className="film-card__image" alt={movieData.title} />
                <h6 className="film-card__title">{movieData.title}</h6>
                <div className="film-card__info">
                    <span className="film-card__year">{movieData.year}</span>
                    {movieData.genres.map((genre, index) => (
                        <span className="film-card__genre" key={index}>
                            {translations[language].intro[genre]}
                        </span>
                    ))}
                </div>
            </Link >
        </div >
    );
}