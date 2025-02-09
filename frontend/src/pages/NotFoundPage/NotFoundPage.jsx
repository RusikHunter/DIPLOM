import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer';
import translationsJSON from '../../assets/translations.json'
import './NotFoundPage.scss'

export default function NotFoundPage() {
    const dispatch = useDispatch()
    const language = useSelector(state => state.client.language)
    const translations = translationsJSON

    useEffect(() => {
        dispatch(setCurrentPage('notfound'))
    }, [])

    return (
        <section className="section section__not-found not-found">
            <div className="not-found__inner container">
                <div className="not-found__row row">
                    <h1 className="not-found__title">
                        {translations[language].notFound.error404}
                    </h1>
                </div>
            </div>
        </section>
    )
}