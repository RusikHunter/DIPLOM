import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'
import Registration from '../../components/Registration/Registration'
import Authorization from '../../components/Authorization/Authorization'


export default function AuthPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('auth'))
    }, [])

    return (
        <>
            <Registration />
            <Authorization />
        </>
    )
}