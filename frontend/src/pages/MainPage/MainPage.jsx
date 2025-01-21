import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setIsBurgerOpen } from '../../store/reducers/clientReducer'

export default function MainPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('main'))
    }, [])

    return (
        <>
            <p>MainPage</p>
        </>
    )
}