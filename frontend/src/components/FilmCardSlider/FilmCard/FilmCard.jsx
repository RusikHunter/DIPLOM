import React from "react"
import { Link } from "react-router-dom"
import './FilmCard.scss'
import tempBG from '../../../assets/icons/tempBG.png'

export default function FilmCard() {
    return (
        <div className="film-card" >
            <img src={tempBG} className="film-card__image" alt="temp" />

            <h6 className="film-card__title">Каскадер</h6>

            <div className="film-card__info">
                <span className="film-card__year">2024</span>

                <span className="film-card__genre">Пригоди</span>

                <span className="film-card__genre">Комедiя</span>
            </div>
        </div>
    )
}