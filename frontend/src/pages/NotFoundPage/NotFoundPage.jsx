import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer';

export default function NotFoundPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('notfound'))
    }, [])

    return (
        <>
            <p>NotFoundPage</p>
        </>
    )
}