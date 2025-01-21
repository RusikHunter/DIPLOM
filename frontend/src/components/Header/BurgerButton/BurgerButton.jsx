import React from "react"
import { useState } from "react"
import './BurgerButton.scss'
import { setIsBurgerOpen } from '../../../store/reducers/clientReducer'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function BurgerButton() {
    const dispatch = useDispatch()
    const location = useLocation()

    const currentPage = useSelector(state => state.client.currentPage)

    useEffect(() => {
        setIsOpen(false)
    }, [currentPage, location])

    const [isOpen, setIsOpen] = useState(false)

    return (
        <button className={`header__button--burger ${isOpen ? 'open' : ''}`} onClick={() => {
            setIsOpen(!isOpen)
            dispatch(setIsBurgerOpen())
        }}>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
        </button>
    )
}