import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setIsBurgerOpen } from '../../store/reducers/clientReducer'
import Intro from '../../components/Intro/Intro';
import Collections from '../../components/Collections/Collections';

export default function FilmsPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('films'))
    }, [])

    return (
        <>
            <main className="main">
                <Intro />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda provident suscipit iure veritatis quas, exercitationem cupiditate necessitatibus corporis adipisci aliquam voluptas quia repellat eius laudantium. Deleniti nesciunt consectetur commodi amet!
                <Collections />
            </main>
        </>
    )
}