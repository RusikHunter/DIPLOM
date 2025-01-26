import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setIsBurgerOpen } from '../../store/reducers/clientReducer'
import Intro from '../../components/Intro/Intro';
import GenreFilter from '../../components/GenreFilter/GenreFilter';
import Collections from '../../components/Collections/Collections';

export default function FilmsPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('films'))
    }, [])

    return (
        <>
            <main className="main">
                <Intro isGenreFilter={true} />
                <GenreFilter />
                <Collections />
            </main>
        </>
    )
}