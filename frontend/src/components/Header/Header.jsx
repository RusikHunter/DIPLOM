import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./Header.scss"
import logoVibixImage from '../../assets/icons/logo.svg';
import avatarIcon from '../../assets/icons/useravatar.png'
import { setLanguage, setTheme, setIsLogged, setCurrentUser } from '../../store/reducers/clientReducer'
import { useDispatch } from 'react-redux';
import BurgerButton from './BurgerButton/BurgerButton';
import translationsJSON from "../../assets/translations.json"
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const translations = translationsJSON

    const language = useSelector(state => state.client.language)
    const theme = useSelector(state => state.client.theme)
    const isLogged = useSelector(state => state.client.isLogged)
    const currentPage = useSelector(state => state.client.currentPage)

    const handleDelete = () => {
        localStorage.removeItem('user')
        localStorage.setItem('isLogged', false)
        dispatch(setCurrentUser({}))
        dispatch(setIsLogged())
        navigate('/auth')
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    useEffect(() => {
        document.documentElement.setAttribute('data-page', currentPage)
    }, [currentPage])

    return (
        <header className='header'>
            <div className="header__inner container">
                <div className="header__row row">
                    <div className="header__column header__column--1 column">
                        <Link to="/">
                            {/* // ! todo обрезать края изображения */}
                            <img src={logoVibixImage} alt="Vibix" className="header__logo" width={110} height={80} />
                        </Link>
                    </div>
                    <div className="header__column header__column--2 column">
                        <nav className="header__navigation">
                            <ul className="header__list--navigation">
                                <li className="header__list-item">
                                    <Link to="/">
                                        <p className="header__link">{translations[language].header.navMain}</p>
                                    </Link>
                                </li>
                                <li className="header__list-item">
                                    <Link to="/films">
                                        <p className="header__link">{translations[language].header.navFilms}</p>
                                    </Link>
                                </li>
                                <li className="header__list-item">
                                    {isLogged === true
                                        ?
                                        <Link to="/favorites">
                                            <p className="header__link">{translations[language].header.navFavorites}</p>
                                        </Link>
                                        :
                                        <Link to="/auth">
                                            <p className="header__link">{translations[language].header.navFavorites}</p>
                                        </Link>
                                    }
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__column header__column--3 column">
                        <div className="header__tools">
                            <ul className='header__list--tools'>
                                <button className="header__button--search">
                                    <Link to="/search">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.9269 15.04L18.4 18.4M17.28 9.43998C17.28 13.7699 13.7699 17.28 9.44001 17.28C5.11009 17.28 1.60001 13.7699 1.60001 9.43998C1.60001 5.11006 5.11009 1.59998 9.44001 1.59998C13.7699 1.59998 17.28 5.11006 17.28 9.43998Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </button>
                                <button className="header__button--theme" onClick={() => dispatch(setTheme())}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2" />
                                        <path d="M10 10L10 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M10 10L5 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <button className="header__button--language" onClick={() => dispatch(setLanguage())}>
                                    {language === 'en' ? <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.402 2.646V6.318H6.722V7.992H2.402V11.826H7.262V13.5H0.35V0.971999H7.262V2.646H2.402ZM20.0675 13.5H18.0155L11.8415 4.158V13.5H9.78945V0.971999H11.8415L18.0155 10.296V0.971999H20.0675V13.5Z" fill="white" />
                                    </svg> : <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.384 0.989999V8.964C2.384 9.912 2.63 10.626 3.122 11.106C3.626 11.586 4.322 11.826 5.21 11.826C6.11 11.826 6.806 11.586 7.298 11.106C7.802 10.626 8.054 9.912 8.054 8.964V0.989999H10.106V8.928C10.106 9.948 9.884 10.812 9.44 11.52C8.996 12.228 8.402 12.756 7.658 13.104C6.914 13.452 6.092 13.626 5.192 13.626C4.292 13.626 3.47 13.452 2.726 13.104C1.994 12.756 1.412 12.228 0.98 11.52C0.548 10.812 0.332 9.948 0.332 8.928V0.989999H2.384ZM20.3197 10.944H15.0817L14.1817 13.5H12.0397L16.5217 0.971999H18.8977L23.3797 13.5H21.2197L20.3197 10.944ZM19.7437 9.27L17.7097 3.456L15.6577 9.27H19.7437Z" fill="white" />
                                    </svg>}
                                </button>
                            </ul>
                        </div>

                        {isLogged
                            && currentPage === "account"
                            &&
                            <button className='header__button--exit'
                                onClick={handleDelete}
                            >{translations[language].header.exitButton}</button>


                        }

                        {isLogged
                            && currentPage !== "account"
                            &&
                            <Link to="/account" className='header__link--account'>
                                <img className='header__image--account' src={avatarIcon} alt='Account' />
                            </Link>
                        }

                        {!isLogged
                            &&
                            <Link to="/auth" className='header__link--enter'>
                                <button className='header__button--enter'>{translations[language].header.accountButton}</button>
                            </Link>
                        }

                        <BurgerButton />
                    </div>
                </div>
            </div>

            <div id="burger-root"></div>
        </header >
    )
}