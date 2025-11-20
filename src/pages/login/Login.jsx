import React from 'react'
import './login.scss'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container'>
            <NavLink to={'/dashboard'}>
                <button>Dashboard</button>
            </NavLink>
        </div>
    )
}

export default Login