import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './PlayList.scss';
import { getPlayList } from './slice';
import { useNavigate } from 'react-router-dom';
import playListImg from '../../assests/playlistBanner/playListImg.webp'

function PlayList() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { playList } = useSelector(state => state.playlist)
    useEffect(() => {
        dispatch(getPlayList(dispatch))
    }, [])

    const handleChangeComponent = (id) => {
        navigate(`/getuserplaylist/${id}`)
    }

    return (
        <div className='playlist-container'>
            <div className='all-playlist-container'>
                {playList.map((item, index) => {
                    return (
                        <div className='all-playlist-main'>
                            <div className='all-playlist-main-image'>
                                <img src={item.images[0].url} alt='' className='all-playlist-img' />
                            </div>
                            <div className='all-playlist-text'>
                                <p>Playlist - {item.owner.display_name}</p>
                                <p className='view-playlist' onClick={() => handleChangeComponent(item.id)}>{item.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='playlist-img-main'>
                <img src={playListImg} alt='' />
            </div>
        </div>
    )
}

export default PlayList
