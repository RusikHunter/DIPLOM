import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setIsBurgerOpen } from '../../store/reducers/clientReducer'
import './MainPageCollections.scss'
import FilmCardSlider from '../../components/FilmCardSlider/FilmCardSlider'
import Intro from '../../components/Intro/Intro.jsx'
import Collections from '../../components/Collections/Collections';

export default function MainPage() {
    return (
        <main className='main'>
            <Intro />
            <Collections />
        </main>
    )
}
