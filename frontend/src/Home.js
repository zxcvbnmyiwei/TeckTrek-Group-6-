import React, { useContext, useEffect, useState } from 'react'
import AuthContext from './context/AuthContext'
import axios from "axios"
import {Button} from "antd"
import {useNavigate} from "react-router-dom"

const Home = () => {
    const {user, authToken} = useContext(AuthContext)


    return (
        <div>
        <div>Hello {user.name}! Welcome to home page, you have successfully logged in xdd</div>
        </div>
    )
}

export default Home