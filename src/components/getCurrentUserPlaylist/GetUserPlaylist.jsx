import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPlaylistSongs } from './slice';
import './GetUserPlaylist.scss';

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
      {/* <p>Songs of "{displayMusic.name}"</p> */}
      {/* {playListImages?.map((item) => {
        return (
          <>
            <img src={item.url} alt='' />
          </>
        )
      })} */}

      {/* {playListName?.map((item, index) => {
        console.log("item", item)
        return (
          <>
            <p>{item.track.name}</p>
          </>
        )
      })} */}



      <div>
        <div className='songs-list-heading'>

          <div>
            <p>#</p>
            <p>
              {playListName?.map((item, index) => {
                return (
                  <>
                    <p>{index+1}</p>
                  </>
                )
              })}
            </p>
          </div>


          <div>
            <p>Title</p>
            <div>
              {playListName?.map((item, index) => {
                const truncatedName = item.track.name.length > 20 ?
                item.track.name.slice(0, 20) + "..." :
                item.track.name;
                return (
                  <React.Fragment>
                    <p>{truncatedName}</p>
                  </React.Fragment>
                )
              })}
            </div>
          </div>


          <div>
            <p>Album</p>
            <p>
              {playListName?.map((item, index) => {
                return (
                  <>
                    <p>{item.track.name}</p>
                  </>
                )
              })}
            </p>
          </div>


          <div>
            <p>Date Added</p>
            <p>
              {playListName?.map((item, index) => {
                return (
                  <>
                    <p>{item.track.name}</p>
                  </>
                )
              })}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GetUserPlaylist
