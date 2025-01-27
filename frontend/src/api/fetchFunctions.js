import axios from "axios"
import { APIkey, rootPath } from "./config"














export function getGenresByIDs(genres, language) {
    let IDs = null

    if (typeof (genres[0]) === 'object') {
        IDs = genres.map(genre => genre.id)
    } else {
        IDs = genres
    }

    const selectedGenres = []

    IDs.forEach(ID => {
        const genreKey = `genre_${ID}`
        if (language === 'ua') {
            selectedGenres.push(genreKey)
        } else {
            selectedGenres.push(genreKey)
        }
    })

    return selectedGenres
}























export async function fetchMainPageMovie(genres) {
    const genresString = genres.join(',')

    try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: APIkey,
                with_genres: genresString,
                with_original_language: "en",
                language: 'uk-UA',
            },
        })

        const movieID = response.data.results[0]?.id

        if (!movieID) {
            throw new Error("Movie IDs not found.")
        }

        const [englishMovieDetails, ukrainianMovieDetails] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/movie/${movieID}`, {
                params: {
                    api_key: APIkey,
                    language: 'en-US',
                },
            }),
            axios.get(`https://api.themoviedb.org/3/movie/${movieID}`, {
                params: {
                    api_key: APIkey,
                    language: 'uk-UA',
                },
            }),
        ])

        const movieDetails = {
            id: movieID,
            backdrop_path: englishMovieDetails.data.backdrop_path,
            poster_path: englishMovieDetails.data.poster_path,
            title: { en: englishMovieDetails.data.title, ua: ukrainianMovieDetails.data.title ? ukrainianMovieDetails.data.title : englishMovieDetails.data.title },
            release_date: englishMovieDetails.data.release_date,
            runtime: englishMovieDetails.data.runtime,
            adult: englishMovieDetails.data.adult,
            vote_average: englishMovieDetails.data.vote_average,
            overview: { en: englishMovieDetails.data.overview, ua: ukrainianMovieDetails.data.overview ? ukrainianMovieDetails.data.overview : englishMovieDetails.data.overview },
            vote_count: englishMovieDetails.data.vote_count,
            genres: englishMovieDetails.data.genres,
        }

        return movieDetails
    } catch (error) {
        console.error('Error fetching movie details:', error.message)
    }
}
















export async function fetchMovieByID(id) {
    try {
        const [responseUA, responseEN] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: {
                    api_key: APIkey,
                    language: 'uk-UA',
                },
            }),
            axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: {
                    api_key: APIkey,
                    language: 'en-US',
                },
            })
        ])

        const responseData = responseEN.data

        const title = {
            ua: responseUA.data.title ? responseUA.data.title : responseEN.data.title,
            en: responseEN.data.title
        }

        const overview = {
            ua: responseUA.data.overview ? responseUA.data.overview : responseEN.data.overview,
            en: responseEN.data.overview
        }

        const result = { ...responseData, title, overview }

        return result
    } catch (error) {
        console.error('Error fetching movie details:', error.message)
    }
}






















export async function fetchAllMovies() {
    // Функция для генерации параметров запроса в зависимости от метода (new, genre, top)
    const fetchParams = (method, page) => ({
        api_key: APIkey,
        language: 'uk-UA',
        sort_by: "popularity.desc",
        page,
        ...(method === "new" && { primary_release_year: 2025, with_original_language: "en" }),
        ...(method === "genre" && { with_genres: "28,18", with_original_language: "en" }),
        ...(method === "top" && { vote_count: 500000 }),
    })

    try {
        const fetchPromises = []
        const methods = ["new", "genre", "top"]

        // Генерируем массив промисов для запросов как на английском, так и на украинском языке
        methods.forEach((method) => {
            for (let i = 1; i <= 3; i++) {
                fetchPromises.push(
                    axios.get("https://api.themoviedb.org/3/discover/movie", {
                        params: fetchParams(method, i),
                    })
                )
            }
        })

        // Выполняем все запросы одновременно
        const responses = await Promise.all(fetchPromises)

        // Разделяем фильмы по языкам для обработки
        const movies = responses.map((response) => response.data.results)

        // Форматируем результаты, добавляя украинские названия
        const formattedMovies = movies.flat().map((movie, index) => ({
            id: movie.id,
            posterPath: `${rootPath}${movie.poster_path}`,
            title: {
                ua: movie.title ? movie.title : movie.original_title,
                en: movie.original_title
            },
            genres: movie.genre_ids.slice(0, 2),
            releaseDate: movie.release_date
        }))

        // Результаты сортируются по категориям (new, genre, top)
        const result = {
            new: formattedMovies.slice(0, 3 * 20),
            genre: formattedMovies.slice(3 * 20, 6 * 20),
            top: formattedMovies.slice(6 * 20),
        }

        return result
    } catch (error) {
        // Обрабатываем ошибки и возвращаем пустые массивы в случае сбоя
        console.error("Ошибка при запросе фильмов:", error.message)
        return { new: [], genre: [], top: [] }
    }
}

















export async function fetchMoviesByParams(method) {
    const fetchParams = (pageNumber) => ({
        api_key: APIkey,
        sort_by: "popularity.desc",
        with_original_language: "en",
        language: 'uk-UA',
        page: pageNumber,
        ...(method === "new" && { primary_release_year: 2025 }),
        ...(method === "genre" && { with_genres: "28,18" }),
        ...(method === "top" && { vote_count: 500000 })
    })

    try {
        const fetchPromises = []

        for (let i = 1; i <= 5; ++i) {
            fetchPromises.push(
                axios.get("https://api.themoviedb.org/3/discover/movie", {
                    params: fetchParams(i),
                })
            )
        }

        const responses = await Promise.all(fetchPromises)

        const movies = responses.map((response) => response.data.results)

        const formattedMovies = movies.flat().map((movie, index) => ({
            id: movie.id,
            posterPath: `${rootPath}${movie.poster_path}`,
            title: {
                ua: movie.title ? movie.title : movie.original_title,
                en: movie.original_title
            },
            genres: movie.genre_ids.slice(0, 2),
            releaseDate: movie.release_date
        }))

        return formattedMovies
    } catch (error) {
        // Обрабатываем ошибки и возвращаем пустые массивы в случае сбоя
        console.error("Ошибка при запросе фильмов:", error.message)
    }
}
