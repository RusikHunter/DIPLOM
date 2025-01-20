import React from "react"
import ReactDOM from "react-dom";
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import './BurgerMenu.scss'
import avatarIcon from '../../../assets/icons/avatar.png'

export default function BurgerMenu() {
    const isLogged = useSelector(state => state.client.isLogged)
    const [burgerRoot, setBurgerRoot] = useState(null)

    useEffect(() => {
        const root = document.getElementById("burger-root")
        setBurgerRoot(root)
    }, [])

    if (!burgerRoot) {
        return null
    }

    return ReactDOM.createPortal(
        <dialog open>
            <div className="header__burger-menu burger">
                <div className="burger__wrapper">
                    {isLogged === true ? <img className='burger__image--account' src={avatarIcon} alt='Account' /> : <button className='burger__button--account'>{translations[language].accountButton}</button>}

                    <dl className="burger__tools-list">
                        <dt className="burger__tool-term">Search</dt>
                        <dd className="burger__tool-definition">
                            <button className="burger__button--search"></button>
                        </dd>

                        <dt className="burger__tool-term">Theme</dt>
                        <dd className="burger__tool-definition">
                            <button className="burger__button--theme"></button>
                        </dd>

                        <dt className="burger__tool-term">Language</dt>
                        <dd className="burger__tool-definition">
                            <button className="burger__button--language"></button>
                        </dd>
                    </dl>
                </div>
            </div>
        </dialog>,
        burgerRoot
    )
}