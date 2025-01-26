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
    console.log(genres)
    const genresString = genres.join(',')

    console.log(genresString)

    try {
        const [englishResponse, ukrainianResponse] = await Promise.all([
            axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: APIkey,
                    with_genres: genresString,
                    with_original_language: "en",
                    language: 'en-US',
                },
            }),
            axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: APIkey,
                    with_genres: genresString,
                    with_original_language: "en",
                    language: 'uk-UA',
                },
            }),
        ])

        const englishMovieId = englishResponse.data.results[0]?.id
        const ukrainianMovieId = ukrainianResponse.data.results[0]?.id

        if (!englishMovieId || !ukrainianMovieId) {
            throw new Error("Movie IDs not found.")
        }

        const [englishMovieDetails, ukrainianMovieDetails] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/movie/${englishMovieId}`, {
                params: {
                    api_key: APIkey,
                    language: 'en-US',
                },
            }),
            axios.get(`https://api.themoviedb.org/3/movie/${ukrainianMovieId}`, {
                params: {
                    api_key: APIkey,
                    language: 'uk-UA',
                },
            }),
        ])

        const englishMovie = englishMovieDetails.data
        const ukrainianMovie = ukrainianMovieDetails.data

        return [englishMovie, ukrainianMovie, englishMovieId, ukrainianMovieId]
    } catch (error) {
        console.error('Error fetching movie details:', error.message)
    }
}

export async function fetchAllMovies() {
    // Функция для генерации параметров запроса в зависимости от метода (new, genre, top)
    const fetchParams = (method, page, language) => ({
        api_key: APIkey,
        language,
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
                        params: fetchParams(method, i, "en-US"),
                    }),
                    axios.get("https://api.themoviedb.org/3/discover/movie", {
                        params: fetchParams(method, i, "uk-UA"),
                    })
                )
            }
        })

        // Выполняем все запросы одновременно
        const responses = await Promise.all(fetchPromises)

        // Разделяем фильмы по языкам для обработки
        const englishMovies = responses.filter((_, index) => index % 2 === 0).map((response) => response.data.results)
        const ukrainianMovies = responses.filter((_, index) => index % 2 !== 0).map((response) => response.data.results)

        // Форматируем результаты, добавляя украинские названия
        const formattedMovies = englishMovies.flat().map((movie, index) => ({
            id: movie.id,
            posterPath: `${rootPath}${movie.poster_path}`,
            title: {
                en: movie.title,
                ua: ukrainianMovies.flat()[index]?.title || movie.title // Если украинский перевод отсутствует, используем английское название
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

        console.log(result)

        return result
    } catch (error) {
        // Обрабатываем ошибки и возвращаем пустые массивы в случае сбоя
        console.error("Ошибка при запросе фильмов:", error.message)
        return { new: [], genre: [], top: [] }
    }
}

