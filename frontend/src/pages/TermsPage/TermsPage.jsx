import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'

export default function TermsPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('terms'))
    }, [])

    return (
        <>
            <p>TermsPage</p>
        </>
    )
}