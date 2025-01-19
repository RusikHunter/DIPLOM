import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'

export default function FavoritesPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('favorites'))
    }, [])

    return (
        <>
            <p>FavoritesPage</p>
        </>
    )
}