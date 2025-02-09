import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setIsBurgerOpen } from '../../store/reducers/clientReducer'
import { useQuery } from '@tanstack/react-query';
import { fetchMovieByID, fetchMoviesByGenres } from '../../api/fetchFunctions';
import { useParams } from 'react-router-dom';
import IntroDetails from '../../components/IntroDetails/IntroDetails';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import FilmCardSlider from '../../components/FilmCardSlider/FilmCardSlider';
import { rootPath } from '../../api/config';
import translationsJSON from '../../assets/translations.json'
import { getGenresByIDs } from '../../api/fetchFunctions';
import SliderDetails from '../../components/SliderDetails/SliderDetails';


export default function MoviePage() {
    const language = useSelector(state => state.client.language)
    const dispatch = useDispatch()
    const { id } = useParams()
    const translations = translationsJSON

    useEffect(() => {
        dispatch(setCurrentPage('movie'))
    }, [])

    // Запрос для получения данных фильма
    const { data, isLoading, error } = useQuery({
        queryKey: ['movie', id],
        queryFn: () => fetchMovieByID(id),
    })

    // Запрос для получения фильмов по жанрам, активируется только после получения `data`
    const { data: dataToSlider, isLoading: isLoadingToSlider, error: errorToSlider } = useQuery({
        queryKey: ['movies-to-slider', data?.genres],
        queryFn: () => fetchMoviesByGenres(`${data.genres[0].id}`),
        enabled: !!data && data.genres.length >= 1,
    })

    if (isLoading) return <React.Fragment />
    if (error) return <React.Fragment />

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
        genres: getGenresByIDs(data.genres),
        directors: data.credits.directors,
        writers: data.credits.writers,
        actors: data.credits.actors,
        countries: data.production_countries,
        languages: data.spoken_languages,
        reviewsCount: data.vote_count > 500 ? Math.floor(data.vote_count / 10) : 0
    }

    return (
        <>
            <main className="main">
                <IntroDetails data={movieData} />
                <MovieDetails data={movieData} />
                {!isLoadingToSlider && dataToSlider ? (
                    <SliderDetails data={dataToSlider} />
                ) : <React.Fragment />}
            </main>
        </>
    )
}