import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'
import Category from '../../components/Category/Category'
import { useLocation } from 'react-router-dom';

export default function CategoryPage() {
    const location = useLocation()
    const { title } = location.state || {}

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('category'))
    }, [])

    return (
        <main className='main'>
            <Category title={title} />
        </main>
    )
}