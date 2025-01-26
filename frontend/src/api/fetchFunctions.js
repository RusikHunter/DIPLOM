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

export async function fetchMainPageMovie() {
    try {
        const [englishResponse, ukrainianResponse] = await Promise.all([
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: APIkey,
                    query: 'Breaking Bad',
                    language: 'en-US',
                },
            }),
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: APIkey,
                    query: 'Breaking Bad',
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

// ! todo дублирующийся код

export async function fetchMoviesBy2025() {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: APIkey,
                language: 'en-US',
                primary_release_year: 2025,
                sort_by: 'popularity.desc',
                page: 1,
            },
        });

        const movies = response.data.results

        const movieIds = movies.map(movie => movie.id)

        const movieDetailsPromises = movieIds.map(id => {
            return Promise.all([
                axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: APIkey,
                        language: 'en-US',
                    },
                }),
                axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: APIkey,
                        language: 'uk-UA',
                    },
                }),
            ])
        })

        const moviesDetails = await Promise.all(movieDetailsPromises)

        const moviesData = moviesDetails.map(([englishDetails, ukrainianDetails]) => {
            const englishMovie = englishDetails.data
            const ukrainianMovie = ukrainianDetails.data

            return {
                id: englishMovie.id,
                posterPath: `${rootPath}${englishMovie.poster_path}`,
                title: {
                    en: englishMovie.title,
                    ua: ukrainianMovie.title || englishMovie.title,
                },
                genres: englishMovie.genres.slice(0, 2).map(genre => genre.id),
                releaseDate: englishMovie.release_date,
            }
        })

        return moviesData

    } catch (error) {
        console.error('Ошибка при запросе данных о фильмах:', error.message)
        return []
    }
}

export async function fetchMoviesByGenre() {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: APIkey,
                language: 'en-US',
                with_genres: '28,18',
                with_original_language: 'en',
                sort_by: 'popularity.desc',
                page: 1,
            },
        });

        const movies = response.data.results

        const movieIds = movies.map(movie => movie.id)

        const movieDetailsPromises = movieIds.map(id => {
            return Promise.all([
                axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: APIkey,
                        language: 'en-US',
                    },
                }),
                axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: APIkey,
                        language: 'uk-UA',
                    },
                }),
            ])
        })

        const moviesDetails = await Promise.all(movieDetailsPromises)

        const moviesData = moviesDetails.map(([englishDetails, ukrainianDetails]) => {
            const englishMovie = englishDetails.data
            const ukrainianMovie = ukrainianDetails.data

            return {
                id: englishMovie.id,
                posterPath: `${rootPath}${englishMovie.poster_path}`,
                title: {
                    en: englishMovie.title,
                    ua: ukrainianMovie.title || englishMovie.title,
                },
                genres: englishMovie.genres.slice(0, 2).map(genre => genre.id),
                releaseDate: englishMovie.release_date,
            }
        })

        return moviesData

    } catch (error) {
        console.error('Ошибка при запросе данных о фильмах:', error.message)
        return []
    }
}

export async function fetchMoviesByTop() {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: APIkey,
                language: 'en-US',
                sort_by: 'popularity.desc',
                with_original_language: 'en',
                vote_count: 50000,
            },
        });

        const movies = response.data.results

        const movieIds = movies.map(movie => movie.id)

        const movieDetailsPromises = movieIds.map(id => {
            return Promise.all([
                axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: APIkey,
                        language: 'en-US',
                    },
                }),
                axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: APIkey,
                        language: 'uk-UA',
                    },
                }),
            ])
        })

        const moviesDetails = await Promise.all(movieDetailsPromises)

        const moviesData = moviesDetails.map(([englishDetails, ukrainianDetails]) => {
            const englishMovie = englishDetails.data
            const ukrainianMovie = ukrainianDetails.data

            return {
                id: englishMovie.id,
                posterPath: `${rootPath}${englishMovie.poster_path}`,
                title: {
                    en: englishMovie.title,
                    ua: ukrainianMovie.title || englishMovie.title,
                },
                genres: englishMovie.genres.slice(0, 2).map(genre => genre.id),
                releaseDate: englishMovie.release_date,
            }
        })

        return moviesData

    } catch (error) {
        console.error('Ошибка при запросе данных о фильмах:', error.message)
        return []
    }
}



