import React, { useState } from 'react'
import './index.css'

import imageUrl from '../../assets/luminous03.jpg'
const Login = (props) => {
    const [index, setIndex] = useState(0)
    const [email, setEmail] = useState(localStorage.getItem('email')?localStorage.getItem('email'):'')
    const [pwd, setPwd] = useState(localStorage.getItem('pwd')?localStorage.getItem('pwd'):'')
    const [isRememberMe, setIsRememberMe] = useState(false)
    const [isShowPwd, setIsShowPwd] = useState(false)
    function handleClickMenu(index) {
        setIndex(index)
        resetForm()
    }
    function resetForm() {
        setEmail('')
        setPwd('')
        setIsRememberMe(false)
        setIsShowPwd(false)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePwd = (e) => {
        setPwd(e.target.value)
    }
    const handleClcikRememberMe = () => {
        setIsRememberMe(!isRememberMe)
    }
    const handleClickShowPwd = () => {
        setIsShowPwd(!isShowPwd)
    }
    const signIn = () => {
        if (isRememberMe) {
            localStorage.setItem('email', email)
            localStorage.setItem('pwd', pwd)
        }
        console.log('is Show password is', isShowPwd);
        console.log('is remember me is', isRememberMe);
        console.log('email is', email);
        console.log('password is', pwd);
        console.log('tab index is', index);
    }
    return (
        <div className="login">
            <main className="container">
                <div className="leftBanner">
                    <h2>Welcome to</h2>
                    <h1>Match Builds of Today<br /> with Builders of Tomorrow</h1>
                    <img src={imageUrl} />
                </div>
                <div className="rightArea">
                    <header>
                        <div className={index === 0 ? 'active' : ''} onClick={handleClickMenu.bind(this, 0)}>INTERN</div>
                        <div className={index === 1 ? 'active' : ''} onClick={handleClickMenu.bind(this, 1)}>STARTUP</div>
                    </header>
                    <div className="title">Sign In</div>
                    <div className="subtitle">If you don't have an account register,<br />You can <span>Register here !</span> </div>
                    <div className="label">Email</div>
                    <div className="input">
                        <input placeholder="Enter your email" value={email} onChange={changeEmail} />
                    </div>
                    <div className="label">Password</div>
                    <div className="input password">
                        <input type={isShowPwd ? 'text' : 'password'} placeholder="Enter your password" value={pwd} onChange={changePwd} />
                        <div className="pwdIcon" onClick={handleClickShowPwd}></div>
                    </div>
                    <div className="isRememberMe">
                        <span onClick={handleClcikRememberMe}>
                            <div className={["rememberIcon", isRememberMe ? 'isRemember' : ''].join(' ')}></div>
                            <span>Remember me</span>
                        </span>
                        <span>Forgot Password?</span>
                    </div>
                    <div className="btn">
                        <button onClick={signIn}>Sign In</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login
