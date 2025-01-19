import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'

export default function FilmsPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('films'))
    }, [])

    return (
        <>
            <p>FilmsPage</p>
        </>
    )
}