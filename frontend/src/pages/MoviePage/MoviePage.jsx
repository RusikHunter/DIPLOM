import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setIsBurgerOpen } from '../../store/reducers/clientReducer'
import { useQuery } from '@tanstack/react-query';
import { fetchMovieByID } from '../../api/fetchFunctions';
import { useParams } from 'react-router-dom';
import IntroDetails from '../../components/IntroDetails/IntroDetails';
import { rootPath } from '../../api/config';
import translationsJSON from '../../assets/translations.json'
import { getGenresByIDs } from '../../api/fetchFunctions';


export default function MoviePage() {
    const language = useSelector(state => state.client.language)
    const dispatch = useDispatch()
    const { id } = useParams()
    const translations = translationsJSON

    useEffect(() => {
        dispatch(setCurrentPage('movie'))
    }, [])

    const { data, isLoading, error } = useQuery({
        queryKey: ['movie', id],
        queryFn: () => fetchMovieByID(id),
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error occurred while fetching data: {error.message}</div>

    const movieData = {
        id: data.id,
        backDropPath: `${rootPath}${data.backdrop_path}`,
        posterPath: `${rootPath}${data.poster_path}`,
        title: language === 'en' ? data.title.en : data.title.ua,
        year: data.release_date.slice(0, 4),
        hours: Math.floor(data.runtime / 60),
        minutes: data.runtime - (Math.floor(data.runtime / 60) * 60),
        adult: data.adult ? '18+' : '0+',
        rating: data.vote_average.toFixed(1),
        description: language === "en" ? data.overview.en : data.overview.ua,
        likes: Math.ceil(data.vote_count * 0.85),
        dislikes: data.vote_count - Math.ceil(data.vote_count * 0.85),
        genres: getGenresByIDs(data.genres)
    }



    return (
        <>
            <main className="main">
                <IntroDetails data={movieData} />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati est fugiat voluptatem iure deserunt eos dignissimos sint vero, minus molestias unde odit cum nemo. Aliquid beatae officiis quibusdam accusamus? Consequatur?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati est fugiat voluptatem iure deserunt eos dignissimos sint vero, minus molestias unde odit cum nemo. Aliquid beatae officiis quibusdam accusamus? Consequatur?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati est fugiat voluptatem iure deserunt eos dignissimos sint vero, minus molestias unde odit cum nemo. Aliquid beatae officiis quibusdam accusamus? Consequatur?
            </main>
        </>
    )
}