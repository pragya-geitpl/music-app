import axios from 'axios'
import React, { useEffect } from 'react'

function GetUserPlaylist() {
    useEffect(() => {
        const getCuurentUserPlayList = async () => {
            try {
                const response = await axios.get('https://api.spotify.com/v1/playlists/{playlist_id}')
            } catch(err) {
                
            }
        }
        getCuurentUserPlayList()
    }, [])
  return (
    <div>
      Hello Users
    </div>
  )
}

export default GetUserPlaylist
