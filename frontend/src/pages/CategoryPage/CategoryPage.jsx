import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'

export default function CategoryPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('category'))
    }, [])

    return (
        <>
            <p>CategoryPage</p>
        </>
    )
}