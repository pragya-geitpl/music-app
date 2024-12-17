import React from 'react'
import bannerLoginImg from '../../assests/loginBanner/banner.jpg'
import './Login.scss'

// package
// components
// utilities commonly used (multiple jgh)
// images
// css

function Login() {
    return (
        <div className='login-main'>
            <div className='login-container'>
                <img className='login-img' src={bannerLoginImg} alt='' />
                <div className='login-text'>
                    <p>Play Music</p>
                </div>
            </div>

            <div className='login-btn'>
                <a href='https://accounts.spotify.com/authorize?response_type=code&client_id=0e2e6d2df5f64267ad00b29d47e8512d&scope=user-read-private user-read-email&redirect_uri=http://localhost:3000/codeverification' className='login-btn'>Login</a>
            </div>
        </div>
    )
}

export default Login
