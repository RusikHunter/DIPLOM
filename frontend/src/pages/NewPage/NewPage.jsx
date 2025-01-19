import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'

export default function NewPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('new'))
    }, [])

    return (
        <>
            <p>NewPage</p>
        </>
    )
}