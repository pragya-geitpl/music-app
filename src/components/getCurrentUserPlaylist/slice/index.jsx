import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const displaySongsSlice = createSlice({
    name: "displaySongs",
    initialState: {
        displayMusic: []
    },
    reducers: {
        setDisplayMusic: (state, action) => {
            state.displayMusic = action.payload
        }
    }
})

export const { setDisplayMusic } = displaySongsSlice.actions;
export default displaySongsSlice.reducer;


export const getPlaylistSongs = (id) => async (dispatch) => {
    try {
        const spotifyAuthData = JSON.parse(localStorage.getItem('spotifyAuthData'));
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
            headers: {
                'Authorization': `Bearer ${spotifyAuthData.access_token}`
            }
        })
        dispatch(setDisplayMusic(response.data))
    } catch (err) {

    }
}
