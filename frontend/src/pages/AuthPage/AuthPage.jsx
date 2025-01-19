import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'

export default function AuthPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('auth'))
    }, [])

    return (
        <>
            <p>AuthPage</p>
        </>
    )
}