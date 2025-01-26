import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setIsBurgerOpen } from '../../store/reducers/clientReducer'

export default function MoviePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('movie'))
    }, [])

    return (
        <>
            <main className="main">
                MoviePage
            </main>
        </>
    )
}