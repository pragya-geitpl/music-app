import { configureStore } from '@reduxjs/toolkit'
import playlistSlice from '../components/playList/slice/index' 
import displaySongsSlice from '../components/getCurrentUserPlaylist/slice/index'

const store = configureStore({
    reducer: {
        playlist: playlistSlice,
        displaySongs: displaySongsSlice,
    }
})

export default store