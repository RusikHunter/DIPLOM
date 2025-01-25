import React from "react"
import FilmCardSlider from "../FilmCardSlider/FilmCardSlider"

export default function Collections() {
    return (
        <section className='section section__collections collections'>
            <div className="collections__inner container">
                <FilmCardSlider title={'Новинки'} />
                <FilmCardSlider title={'Вам сподобається'} />
                <FilmCardSlider title={'Топ 250'} />
            </div>
        </section>
    )
}