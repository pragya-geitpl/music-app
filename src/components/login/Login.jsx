import React from 'react'
import login_img from '../../assests/wallpaper_login.jpg'
import './Login.css'

// package
// components
// utilities commonly used (multiple jgh)
// images
// css

function Login() {
    return (
        <div className='login-main'>
            <img className='login-img' src={login_img} alt='' />
            <div className='login-btn-main'>
                <a href='https://accounts.spotify.com/authorize?response_type=code&client_id=0e2e6d2df5f64267ad00b29d47e8512d&scope=user-read-private user-read-email&redirect_uri=http://localhost:3000/codeverification' className='login-btn'>Login</a>
            </div>
        </div>
    )
}

export default Login
