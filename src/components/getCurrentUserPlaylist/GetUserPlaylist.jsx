import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPlaylistSongs } from './slice';

function GetUserPlaylist() {
  const dispatch = useDispatch()
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlaylistSongs(id))
  }, [])

  const { displayMusic } = useSelector(state => state.displaySongs)
  const newListArray = displayMusic.tracks?.items
  const playListImages = displayMusic.images
  const playListName = displayMusic?.tracks?.items

  return (
    <div>
      <p>Songs of "{displayMusic.name}"</p>
      {/* {playListImages?.map((item) => {
        return (
          <>
            <img src={item.url} alt='' />
          </>
        )
      })} */}

      {playListName?.map((item, index) => {
        console.log("item", item)
        return (
          <>
            <p>{item.track.name}</p>
          </>
        )
      })}
    </div>
  )
}

export default GetUserPlaylist
