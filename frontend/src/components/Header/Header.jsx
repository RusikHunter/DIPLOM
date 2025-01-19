import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./Header.scss"
import logoVibixImage from '../../assets/icons/logo.svg';
import searchIcon from '../../assets/icons/search.svg'
import themeIcon from '../../assets/icons/theme.svg'
import { setLanguage, setTheme, setIsLogged } from '../../store/reducers/clientReducer'
import { useDispatch } from 'react-redux';


export default function Header() {
    const dispatch = useDispatch()

    const language = useSelector(state => state.client.language)
    const theme = useSelector(state => state.client.theme)
    const isLogged = useSelector(state => state.client.isLogged)

    const translations = {
        ua: {
            navMain: 'Головна',
            navFilms: 'Фільми',
            navFavorites: 'Збережене',
            accountButton: 'Увійти',
            languageSign: 'UA'
        },
        en: {
            navMain: 'Main',
            navFilms: 'Films',
            navFavorites: 'Favorites',
            accountButton: 'LogIn',
            languageSign: 'EN'
        }
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <header className='header'>
            <div className="header__inner container">
                <div className="header__row row">
                    <div className="header__column header__column--1 column">
                        <a href="#" className="header__link--image">
                            {/* // ! todo обрезать края изображения */}
                            <img src={logoVibixImage} alt="Vibix" className="header__logo" width={110} height={80} />
                        </a>
                    </div>
                    <div className="header__column header__column--2 column">
                        <nav className="header__navigation">
                            <ul className="header__list--navigation">
                                <li className="header__list-item">
                                    <a href="#" className="header__link">{translations[language].navMain}</a>
                                </li>
                                <li className="header__list-item">
                                    <a href="#" className="header__link">{translations[language].navFilms}</a>
                                </li>
                                <li className="header__list-item">
                                    <a href="#" className="header__link">{translations[language].navFavorites}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__column header__column--3 column">
                        <div className="header__tools">
                            <ul className='header__list--tools'>
                                <a href="#" className='header__link--image'>
                                    <img src={searchIcon} alt="search" />
                                </a>
                                <button className="header__button--theme" onClick={() => dispatch(setTheme())}>T</button>
                                <button className="header__button--language" onClick={() => dispatch(setLanguage())}>
                                    {translations[language].languageSign}
                                </button>
                            </ul>
                        </div>
                        {isLogged === true ? <img className='header__image--account' src={themeIcon} alt='Account' /> : <button class='header__button--enter'>{translations[language].accountButton}</button>}
                    </div>
                </div>
            </div>
        </header>
    )
}