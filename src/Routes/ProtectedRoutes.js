import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoutes = ({children}) => {
    const Token = JSON.parse(sessionStorage.getItem("token")) 
  return Token ? children : <Navigate to="/login"/>
}
