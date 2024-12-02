import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
    reducers: {
        playlist: playlistSlice
    }
})

export default store