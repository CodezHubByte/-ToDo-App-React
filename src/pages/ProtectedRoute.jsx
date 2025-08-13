import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const loginData = localStorage.getItem("LoginData") || false
    const registerData = localStorage.getItem("RegisterData") || false

    console.log(loginData, registerData)

    if(!registerData && !loginData){
        return <Navigate to="signup" />
    }else if(registerData && !loginData){
        return <Navigate to="login" />
    }else{
        return children
    }
}

export default ProtectedRoute;
