import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
    name: 'playlist',
    initialState: {
        playList: []
    },
    reducers: {
        setPlayList: (state, action) => {
            state.playList = action.payload
        }
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
        dispatch(setPlayList(response.data))
    } catch (err) {
        console.error(err);
    }
}