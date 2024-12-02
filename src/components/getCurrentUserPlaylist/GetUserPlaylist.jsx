import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function GetUserPlaylist() {

  const { playList } = useSelector(state => state.playlist)
  useEffect(() => {
    const getCuurentUserPlayList = async () => {
      try {
        const spotifyAuthData = JSON.parse(localStorage.getItem('spotifyAuthData'));
        const id = playList.data.items[0].id
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
          headers: {
            'Authorization': `Bearer ${spotifyAuthData.access_token}`
          }
        })
        console.log("response....", response)
      } catch (err) {

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
