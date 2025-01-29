import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setIsBurgerOpen } from '../../store/reducers/clientReducer'
import Search from '../../components/Search/Search';

export default function SearchPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('search'))
    }, [])

    return (
        <main className="main">
            <Search />
        </main>
    )
}