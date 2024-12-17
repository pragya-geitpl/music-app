import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './PlayList.css';
import { getPlayList } from './slice';
import { useNavigate } from 'react-router-dom';

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
        <>
            {playList.map((item, index) => {
                return (
                    <>
                        <img src={item.images[0].url} alt='' />
                        <p className='view-playlist' onClick={() => handleChangeComponent(item.id)}>{item.name}</p>
                    </>
                )
            })}
        </>
    )
}

export default PlayList
