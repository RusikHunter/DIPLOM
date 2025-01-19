import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
    name: 'client',
    initialState: { currentPage: 'main' },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
    },
})

export const { setCurrentPage } = clientSlice.actions
export default clientSlice.reducer