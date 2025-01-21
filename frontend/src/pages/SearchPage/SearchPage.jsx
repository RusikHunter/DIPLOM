import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setIsBurgerOpen } from '../../store/reducers/clientReducer'

export default function SearchPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('search'))
    }, [])

    return (
        <>
            <p>SearchPage</p>
        </>
    )
}