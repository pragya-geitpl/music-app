import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const playlistSlice = createSlice({
    name: 'playlist',
    initialState: {
        playList: [],
        // displayPlayList:[]
    },
    reducers: {
        setPlayList: (state, action) => {
            state.playList = action.payload
        },
        // setDisplayPlayList: (state, action) => {
        //     state.displayPlayList = action.playload
        // }
    }
})

export const {setPlayList} = playlistSlice.actions
export default playlistSlice.reducer

export const getPlayList = () => async(dispatch) => {
    try {
        const spotifyAuthData = JSON.parse(localStorage.getItem('spotifyAuthData'));
        const response = await axios.get('https://api.spotify.com/v1/me/playlists',{
            headers: {
                'Authorization': `Bearer ${spotifyAuthData.access_token}`
            }
        });
        dispatch(setPlayList(response))
    } catch (err) {
        console.error(err);
    }
}

// export const displayPlayList = () => {
//     try {
//         const response 
//     }
// }