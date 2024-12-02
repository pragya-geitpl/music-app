import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import SpotifyLogin from '../components/spotify_login/SpotifyLogin'
import PlayList from '../components/playList/PlayList'
import GetUserPlaylist from '../components/getCurrentUserPlaylist/GetUserPlaylist'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/codeverification',
        element: <SpotifyLogin/>
    },
    {
        path: '/playList',
        element: <PlayList/>
    },
    {
        path: '/getuserplaylist',
        element: <GetUserPlaylist/>
    }
])