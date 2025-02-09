import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
    name: 'client',
    initialState: {
        language: 'ua', // локализация для всего приложения
        currentPage: 'main', // текущая страница
        currentUser: {},
        theme: 'dark', // текущая тема
        isLogged: false, // авторизирован ли пользователь
        isBurgerOpen: false, // открыто ли бургер меню
        isPlayerOpen: false, // открыт ли плеер
        filmsPageGenresArray: [], // массив жанров, по которым осуществляется поиск в FilmsPage
    },
    reducers: {
        setLanguage: (state) => {
            state.language = state.language === 'ua' ? 'en' : 'ua'
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
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
        setIsPlayerOpen: (state) => {
            state.isPlayerOpen = !state.isPlayerOpen
        },
        resetBurgerMenu: (state) => {
            state.isBurgerOpen = false;
        },
        changeFilmsPageGenresArray: (state, action) => {
            state.filmsPageGenresArray = action.payload
        }
    },
})

export const {
    setLanguage,
    setCurrentPage,
    setCurrentUser,
    setTheme,
    setIsLogged,
    setIsBurgerOpen,
    setIsPlayerOpen,
    resetBurgerMenu,
    changeFilmsPageGenresArray,
} = clientSlice.actions

export default clientSlice.reducer