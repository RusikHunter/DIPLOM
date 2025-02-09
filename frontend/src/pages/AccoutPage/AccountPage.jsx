import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'
import Account from '../../components/Account/Account'

export default function AccountPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('account'))
    }, [])

    return (
        <main className='main'>
            <Account />
        </main>
    )
}