import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'

export default function MoviePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('movie'))
    }, [])

    return (
        <>
            <p>MoviePage</p>
        </>
    )
}