import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setIsBurgerOpen } from '../../store/reducers/clientReducer'
import FavoritesList from '../../components/FavoritesList/FavoritesList'

export default function FavoritesPage() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.client.currentUser)

    useEffect(() => {
        dispatch(setCurrentPage('favorites'))
    }, [])

    return (
        <>
            <FavoritesList />
        </>
    )
}