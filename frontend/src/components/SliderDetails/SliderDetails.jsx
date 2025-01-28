import React from "react"
import './SliderDetails.scss'
import FilmCardSlider from "../FilmCardSlider/FilmCardSlider"

export default function SliderDetails({ data }) {
    console.log('data123', data);

    return (
        <section className="section section__slider-details slider-details">
            <div className="slider-details__inner container">
                <FilmCardSlider title={'similar'} movies={data} />
            </div>
        </section>
    )
}