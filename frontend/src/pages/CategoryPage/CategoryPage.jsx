import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'
import Category from '../../components/Category/Category'
import { useParams } from 'react-router-dom';

export default function CategoryPage() {
    const dispatch = useDispatch()
    const { title } = useParams()

    console.log(title);


    useEffect(() => {
        dispatch(setCurrentPage('category'))
    }, [])

    return (
        <main className='main'>
            <Category title={title} />
        </main>
    )
}