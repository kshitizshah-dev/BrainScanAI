import React, { useState , useEffect} from 'react'
import { createContext } from 'react'
import { AccessToken,RefreshToken } from './AuthConstants'
import { jwtDecode } from 'jwt-decode'
import auth_api from './Hooks/api'


export const AuthContext = createContext()

export function AuthProvider({children}){
  const [isAuthenticate,setIsAuthenticate] = useState(null)

  const logStatus = async() =>{
    const token = localStorage.getItem(AccessToken)
    const refresh = localStorage.getItem(RefreshToken)

    if (!token){
      setIsAuthenticate(false)
    }

    try {
      const decoded = jwtDecode(token);
      const expDate = decoded.exp;

      if (Date.now() / 1000 > expDate) {
        const res = await auth_api.post('/refresh/', { refresh: refresh });
        if (res.status === 200) {
          setIsAuthenticate(true);
          localStorage.setItem(AccessToken, res.data.access);
        } else {
          setIsAuthenticate(false);
        }
      } else {
        setIsAuthenticate(true);
      }
    } catch (err) {
      setIsAuthenticate(false);
    }
  } 
  const login = ()=>{
    setIsAuthenticate(true)
  }
  const logout = ()=>{
    setIsAuthenticate(false)
  }
  useEffect(() => {
    logStatus();
  }, []);

  return (
    <AuthContext.Provider value={{isAuthenticate,login,logout}}>
    {children}
    </AuthContext.Provider>
    
  )
}