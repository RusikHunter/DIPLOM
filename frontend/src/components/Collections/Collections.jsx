import React from "react"
import FilmCardSlider from "../FilmCardSlider/FilmCardSlider"
import './Collections.scss'
import translationsJSON from "../../assets/translations.json"
import { useSelector } from 'react-redux';
import { fetchMoviesBy2025, fetchMoviesByGenre, fetchMoviesByTop } from '../../api/fetchFunctions.js'



export default function Collections() {
    const translations = translationsJSON

    const language = useSelector(state => state.client.language)

    return (
        <section className='section section__collections collections'>
            <div className="collections__inner container">
                <FilmCardSlider title={translations[language].collections.novelty} method={fetchMoviesBy2025} queryKey='123' />
                <FilmCardSlider title={translations[language].collections.forYou} method={fetchMoviesByGenre} queryKey='456' />
                <FilmCardSlider title={translations[language].collections.top} method={fetchMoviesByTop} queryKey='789' />
            </div>
        </section>
    )
}