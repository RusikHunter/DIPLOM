import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
    name: 'client',
    initialState: {
        language: 'ua',
        currentPage: 'main',
        theme: 'dark',
        isLogged: false,
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
    },
})

export const { setLanguage, setCurrentPage, setTheme, setIsLogged } = clientSlice.actions
export default clientSlice.reducer