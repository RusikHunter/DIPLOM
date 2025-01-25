import React from "react"
import FilmCardSlider from "../FilmCardSlider/FilmCardSlider"
import './Collections.scss'
import translationsJSON from "../../assets/translations.json"
import { useSelector } from 'react-redux';

export default function Collections() {
    const translations = translationsJSON

    const language = useSelector(state => state.client.language)

    return (
        <section className='section section__collections collections'>
            <div className="collections__inner container">
                <FilmCardSlider title={translations[language].collections.novelty} />
            </div>
        </section>
    )
}