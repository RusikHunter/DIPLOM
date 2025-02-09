import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsPlayerOpen } from "../../store/reducers/clientReducer";
import video from '../../assets/movies/movie.mp4'
import './Player.scss'

export default function Player() {
    const dispatch = useDispatch()
    const isPlayerOpen = useSelector(state => state.client.isPlayerOpen)
    const [playerRoot, setPlayerRoot] = useState(null)

    useEffect(() => {
        const root = document.getElementById("player-root")
        setPlayerRoot(root)
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute('data-player', isPlayerOpen)
    }, [isPlayerOpen])

    const handleClose = () => {
        dispatch(setIsPlayerOpen())
    }

    if (!playerRoot) return null

    return ReactDOM.createPortal(
        <dialog className="player" {...(isPlayerOpen ? { open: true } : {})}>
            <video className="player__video" controls>
                <source src={video} type="video/mp4" />
                Ваш браузер не поддерживает тег video.
            </video>

            <button className="player__button--close" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
        </dialog>,
        document.getElementById("player-root")
    )
}