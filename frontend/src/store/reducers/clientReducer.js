import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
    name: 'client',
    initialState: {
        language: 'ua', // локализация для всего приложения
        currentPage: 'main', // текущая страница
        theme: 'dark', // текущая тема
        isLogged: true, // авторизирован ли пользователь
        isBurgerOpen: false, // открыто ли бургер меню
        filmsPageGenresArray: [], // массив жанров, по которым осуществляется поиск в FilmsPage
        similarGenres: '', // строка похожих жанров на MoviePage 
    },
    reducers: {
        setLanguage: (state) => {
            state.language = state.language === 'ua' ? 'en' : 'ua'
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },
        setIsLogged: (state) => {
            state.isLogged = !state.isLogged
        },
        setIsBurgerOpen: (state) => {
            state.isBurgerOpen = !state.isBurgerOpen
        },
        resetBurgerMenu: (state) => {
            state.isBurgerOpen = false;
        },
        changeFilmsPageGenresArray: (state, action) => {
            state.filmsPageGenresArray = action.payload
        },
        setSimilarGenres: (state, action) => {
            state.similarGenres = action.payload
        }
    },
})

export const {
    setLanguage,
    setCurrentPage,
    setTheme,
    setIsLogged,
    setIsBurgerOpen,
    resetBurgerMenu,
    changeFilmsPageGenresArray,
    setSimilarGenres
} = clientSlice.actions

export default clientSlice.reducer