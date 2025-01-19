import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'

export default function AccountPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('account'))
    }, [])

    return (
        <>
            <p>AccountPage</p>
        </>
    )
}