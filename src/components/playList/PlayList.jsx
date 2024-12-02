import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './PlayList.css';
import { getPlayList } from './slice';
import { useNavigate } from 'react-router-dom';

function PlayList() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getPlayList(dispatch))
    }, [])

    const handleChangeComponent = () => {
        navigate('/getuserplaylist')
    }

    return (
        <>
            <a className='view-playlist' onClick={handleChangeComponent}>Go to the playlist</a>
        </>
    )
}

export default PlayList
