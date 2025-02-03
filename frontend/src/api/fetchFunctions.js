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
    let genresString = genres

    if (typeof genres === "object") {
        genresString = genres.join(',')
    }

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

        console.log(movieDetails);


        return movieDetails
    } catch (error) {
        console.error('Error fetching movie details:', error.message)
    }
}
















export async function fetchMovieByID(id) {
    try {
        const [movieResponseUA, movieResponseEN, creditsResponse] = await Promise.all([
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
            }),
            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
                params: {
                    api_key: APIkey,
                },
            })
        ])

        const movieData = movieResponseEN.data;

        const title = {
            ua: movieResponseUA.data.title || movieResponseEN.data.title,
            en: movieResponseEN.data.title,
        }

        const overview = {
            ua: movieResponseUA.data.overview || movieResponseEN.data.overview,
            en: movieResponseEN.data.overview,
        }

        const credits = creditsResponse.data

        const actors = credits.cast.slice(0, 10).map(actor => ({
            id: actor.id,
            name: actor.name,
            character: actor.character,
            profile_path: actor.profile_path,
        }))

        const crew = credits.crew
        const directors = crew.filter(member => member.job === 'Director').map(director => ({
            id: director.id,
            name: director.name,
        }))

        const writers = crew.filter(member => member.job === 'Screenplay' || member.job === 'Writer').map(writer => ({
            id: writer.id,
            name: writer.name,
        }))

        const result = {
            ...movieData,
            title,
            overview,
            credits: {
                actors,
                directors,
                writers,
            },
        };

        // console.log('result', result);

        return result;
    } catch (error) {
        console.error('Error fetching movie details:', error.message);
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

















export async function fetchMoviesByParams(method, similarGenres = "18") {
    const fetchParams = (pageNumber) => ({
        api_key: APIkey,
        sort_by: "popularity.desc",
        with_original_language: "en",
        language: 'uk-UA',
        page: pageNumber,
        ...(method === "new" && { primary_release_year: 2025 }),
        ...(method === "genre" && { with_genres: "28,18" }),
        ...(method === "top" && { vote_count: 500000 }),
        ...(method === "similar" && { with_genres: similarGenres })
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














export async function fetchMoviesByGenres(genres) {
    try {
        const fetchPromises = await Promise.all([
            axios.get("https://api.themoviedb.org/3/discover/movie", {
                params: {
                    api_key: APIkey,
                    sort_by: "popularity.desc",
                    with_original_language: "en",
                    language: 'uk-UA',
                    with_genres: genres,
                    page: 1,
                    vote_count: 500000
                },
            })
        ])

        const responses = await Promise.all(fetchPromises)

        const movies = responses.map((response) => response.data.results)

        const formattedMovies = movies[0].map((movie, index) => ({
            id: movie.id,
            posterPath: `${rootPath}${movie.poster_path}`,
            title: {
                ua: movie.title ? movie.title : movie.original_title,
                en: movie.original_title
            },
            genres: movie.genre_ids.slice(0, 2),
            releaseDate: movie.release_date
        }))

        console.log('formattedMovies', formattedMovies);

        return formattedMovies
    } catch (error) {
        console.error("Ошибка при запросе фильмов:", error.message)
    }
}




export async function fetchMoviesByParamObject(params) {
    const fetchParams = {
        api_key: APIkey,
        sort_by: "popularity.desc",
        language: 'uk-UA',
        page: 1,
        with_genres: params.with_genres.join(','),
        with_original_language: params.with_original_language.join(','),
        primary_release_year: params.primary_release_year,
        query: params.query
    }

    console.log('params', fetchParams)


    try {
        const fetchPromises = await Promise.all([
            axios.get("https://api.themoviedb.org/3/search/movie", {
                params: fetchParams,
            })
        ])

        const responses = await Promise.all(fetchPromises)

        const movies = responses.map((response) => response.data.results)

        const formattedMovies = movies[0].map((movie, index) => ({
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
        console.error("Ошибка при запросе фильмов:", error.message)
    }
}