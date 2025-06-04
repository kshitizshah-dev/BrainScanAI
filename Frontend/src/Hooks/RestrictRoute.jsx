import React, { useEffect, useState } from 'react'
import { AccessToken, RefreshToken } from '../AuthConstants'
import {jwtDecode} from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import auth_api from '../hooks/api';

export default function RestrictRoute({children}) {
    const [isAuthenticate,setIsAuthenticate] = useState(false)
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        auth()
    },[])
    const refresh= async ()=>{
        const refrestToken = localStorage.getItem(RefreshToken)
        try{
        const res= await auth_api.post('/refresh/',{refresh:refrestToken});
        if (res.status===200){
            localStorage.setItem(AccessToken,res.data.access)
            setIsAuthenticate(true)
        }

        }
        catch(err){
            console.log(err.data)
        }
    }
    const auth = async ()=>{
        const token = localStorage.getItem(AccessToken)
        if (!token){
            setIsLoading(false);
            return;}
        try{
        const decode = jwtDecode(token)
        const expDate = decode.exp
        if (Date.now()/1000 > expDate){
            await refresh()
        }else{
            setIsAuthenticate(true)
        }
        }
        catch(err){
            console.log(err)
        }
        finally{
            setIsLoading(false)
        }

    }
    if (isLoading){
        return <h2>...loading</h2>
    }
  return isAuthenticate ? children: <Navigate to='/login/'/>
}
