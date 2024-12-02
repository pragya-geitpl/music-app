import { configureStore } from '@reduxjs/toolkit'
import playlistSlice from '../components/playList/slice/index' 

const store = configureStore({
    reducer: {
        playlist: playlistSlice,
        // displayplaylist: displayplaylistSlice
    }
})

export default store