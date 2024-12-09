import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'

function SpotifyLogin() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [loader, setLoader] = useState(false)
    const code = searchParams.get('code')

    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            setLoader(true)
            const client_id = '0e2e6d2df5f64267ad00b29d47e8512d'
            const client_secret = 'd22c68579dd640c4aaeb601902f65b69'
            try {
                const response = await axios.post('https://accounts.spotify.com/api/token', {
                    code,
                    redirect_uri: 'http://localhost:3000/codeverification',
                    grant_type: 'authorization_code'
                }, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'Authorization': `Basic ${btoa(client_id + ':' + client_secret)}`
                        // 'Authorization': 'Basic MGUyZTZkMmRmNWY2NDI2N2FkMDBiMjlkNDdlODUxMmQ6ZDIyYzY4NTc5ZGQ2NDBjNGFhZWI2MDE5MDJmNjViNjk='
                    }
                });
                localStorage.setItem('spotifyAuthData', JSON.stringify(response.data));
                setLoader(false)
                navigate('/playLists')

            } catch (err) {
                if (err.response?.status === 401) {
                    try {
                        const spotifyAuthData = JSON.parse(localStorage.getItem('spotifyAuthData'));
                        const refreshResponse = await axios.post('https://accounts.spotify.com/api/token', {
                            grant_type: 'refresh_token',
                            refresh_token: spotifyAuthData.refresh_token,
                        }, {
                            headers: {
                                'content-type': 'application/x-www-form-urlencoded',
                                'Authorization': `Basic ${btoa(client_id + ':' + client_secret)}`
                            }
                        }
                        )
                    } catch (err) {
                        console.log(err)
                    }
                }
            }
        }
        code && getData()
    }, [])

    return (
        <div>
            {loader ? <CircularProgress /> : ""}
        </div>
    )
}

export default SpotifyLogin
