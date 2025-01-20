import React from "react"
import { useState } from "react"
import './BurgerButton.scss'

export default function BurgerButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <button className={`header__button--burger ${isOpen ? 'open' : ''}`} onClick={() => {
            setIsOpen(!isOpen)
        }}>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
        </button>
    )
}