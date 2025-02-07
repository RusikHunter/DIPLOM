import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'
import Registration from '../../components/Registration/Registration'
import Authorization from '../../components/Authorization/Authorization'


export default function AuthPage() {
    const dispatch = useDispatch()
    const [currentForm, setCurrentForm] = useState('auth')

    useEffect(() => {
        dispatch(setCurrentPage('auth'))
    }, [])

    const handleChangeToAuth = () => {
        setCurrentForm('auth')
    }

    const handleChangeToReg = () => {
        setCurrentForm('reg')
    }

    return (
        <>
            {currentForm === "reg"
                ? <Registration handleChangeToAuth={handleChangeToAuth} />
                : <Authorization handleChangeToReg={handleChangeToReg} />
            }
        </>
    )
}