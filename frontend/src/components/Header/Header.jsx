import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
    const currentPage = useSelector(state => state.client.currentPage)

    return (
        <>
            <h1>Header</h1>
            {currentPage !== 'search' && <p>lorem ipsum</p>}
            {currentPage !== 'search' && <p>lorem gfklngkjdafngjnd</p>}
            <h4>gndfjgjdifhjigjd</h4>
        </>
    )
}