import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GetUserPlaylist from '../getCurrentUserPlaylist/GetUserPlaylist';
import './PlayList.css';

function PlayList() {
    const[apiData, setApiData] = useState();

    useEffect(() => {
        const getUserPlayList = async () => {
            try {
                const spotifyAuthData = JSON.parse(localStorage.getItem('spotifyAuthData'));
                const response = await axios.get('https://api.spotify.com/v1/me/playlists',{
                    headers: {
                        'Authorization': `Bearer ${spotifyAuthData.access_token}`
                    }
                });
                setApiData(response.data.items[0].id)
            } catch (err) {
                console.error(err);
            }
        }
        getUserPlayList()
    }, [])

    return (
        <>
            <a className='view-playlist'>Go to the playlist</a>
            <GetUserPlaylist
                apiData={apiData}
                setApiData={setApiData}
            />
        </>
    )
}

export default PlayList
