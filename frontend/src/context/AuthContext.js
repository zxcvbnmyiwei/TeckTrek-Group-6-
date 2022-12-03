import {createContext, useState, useEffect} from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    let [authToken, setAuthToken] = useState(() => localStorage.getItem("accessToken") ? JSON.parse(localStorage.getItem("accessToken")) : null)
    let [user,setUser] = useState(() => localStorage.getItem("accessToken") ? jwt_decode(localStorage.getItem("accessToken")) : null)

    const tokenAPI = axios.create({
        baseURL:"http://127.0.0.1:4000",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const navigate = useNavigate()


    let loginUser = async (e) => {
        const payload = JSON.stringify({"username": e.username , "password": e.password})
        try {
            let response = await tokenAPI.post("/login/",  payload)
            console.log(response)
            if (response.status === 200) {
                console.log(response.data.accessToken)
                setAuthToken(response.data.accessToken)
                setUser(jwt_decode(response.data.accessToken))
                localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken))
                navigate("/")
            }
        } catch {
            alert("Wrong password/user combination")
        }
    }

    let logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem("accessToken")
        navigate("/login")
    }

    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
        authToken: authToken
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

}