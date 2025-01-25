import React from "react"
import ReactDOM from "react-dom";
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import './BurgerMenu.scss'
import avatarIcon from '../../../assets/icons/avatar.png'
import { setTheme, setLanguage, resetBurgerMenu } from "../../../store/reducers/clientReducer";
import translationsJSON from "../../../assets/translations.json"
import { Link, useLocation } from "react-router-dom";

export default function BurgerMenu() {
    const dispatch = useDispatch()
    const location = useLocation()

    const translations = translationsJSON

    const currentPage = useSelector(state => state.client.currentPage)
    const isLogged = useSelector(state => state.client.isLogged)
    const language = useSelector(state => state.client.language)
    const isBurgerOpen = useSelector(state => state.client.isBurgerOpen)
    const [burgerRoot, setBurgerRoot] = useState(null)

    useEffect(() => {
        const root = document.getElementById("burger-root")
        setBurgerRoot(root)
    }, [])

    useEffect(() => {
        dispatch(resetBurgerMenu())
    }, [currentPage, location])

    useEffect(() => {
        document.documentElement.setAttribute('data-burger', isBurgerOpen)
    }, [isBurgerOpen])

    if (!burgerRoot) {
        return null
    }

    return ReactDOM.createPortal(
        <dialog className="header__burger-menu burger" {...(isBurgerOpen ? { open: true } : {})}>
            <div className="burger__wrapper">
                {isLogged
                    ?
                    <Link to="/account">
                        <img className='burger__image--account' src={avatarIcon} alt='Account' />
                    </Link>
                    :
                    <Link to="/auth">
                        <button className='burger__button--account'>{translations[language].header.accountButton}</button>
                    </Link>
                }

                <dl className="burger__tools-list">
                    <Link to="/search">
                        <div className="burger__tool-wrap">
                            <dt className="burger__tool-term">{translations[language].header.burgerSearch}</dt>
                            <dd className="burger__tool-definition">
                                <button className="burger__button--search">

                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.9269 15.04L18.4 18.4M17.28 9.43998C17.28 13.7699 13.7699 17.28 9.44001 17.28C5.11009 17.28 1.60001 13.7699 1.60001 9.43998C1.60001 5.11006 5.11009 1.59998 9.44001 1.59998C13.7699 1.59998 17.28 5.11006 17.28 9.43998Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>



                                </button>
                            </dd>
                        </div>
                    </Link>

                    <div className="burger__tool-wrap" onClick={() => dispatch(setTheme())}>
                        <dt className="burger__tool-term">{translations[language].header.burgerTheme}</dt>
                        <dd className="burger__tool-definition">
                            <button className="burger__button--theme">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2" />
                                    <path d="M10 10L10 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M10 10L5 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </dd>
                    </div>

                    <div className="burger__tool-wrap" onClick={() => dispatch(setLanguage())}>
                        <dt className="burger__tool-term">{translations[language].header.burgerLanguage}</dt>
                        <dd className="burger__tool-definition">
                            <button className="burger__button--language">
                                {language === 'en' ? <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.402 2.646V6.318H6.722V7.992H2.402V11.826H7.262V13.5H0.35V0.971999H7.262V2.646H2.402ZM20.0675 13.5H18.0155L11.8415 4.158V13.5H9.78945V0.971999H11.8415L18.0155 10.296V0.971999H20.0675V13.5Z" fill="white" />
                                </svg> : <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.384 0.989999V8.964C2.384 9.912 2.63 10.626 3.122 11.106C3.626 11.586 4.322 11.826 5.21 11.826C6.11 11.826 6.806 11.586 7.298 11.106C7.802 10.626 8.054 9.912 8.054 8.964V0.989999H10.106V8.928C10.106 9.948 9.884 10.812 9.44 11.52C8.996 12.228 8.402 12.756 7.658 13.104C6.914 13.452 6.092 13.626 5.192 13.626C4.292 13.626 3.47 13.452 2.726 13.104C1.994 12.756 1.412 12.228 0.98 11.52C0.548 10.812 0.332 9.948 0.332 8.928V0.989999H2.384ZM20.3197 10.944H15.0817L14.1817 13.5H12.0397L16.5217 0.971999H18.8977L23.3797 13.5H21.2197L20.3197 10.944ZM19.7437 9.27L17.7097 3.456L15.6577 9.27H19.7437Z" fill="white" />
                                </svg>}
                            </button>
                        </dd>
                    </div>
                </dl>
            </div>
        </dialog >,
        burgerRoot
    )
}