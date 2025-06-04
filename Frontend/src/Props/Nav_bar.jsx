import React, { useState,useEffect, useContext } from 'react';
import { AccessToken, RefreshToken } from '../AuthConstants';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import auth_api from '../hooks/api';
import { AuthContext } from '../AuthContext';





function Nav_bar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const {isAuthenticate,logout} = useContext(AuthContext)


  // useEffect(()=>{
  //   logStatus()
  // },[])


  // const logStatus = async () =>{

  //   const token = localStorage.getItem(AccessToken);
  //   const refresh = localStorage.getItem(RefreshToken)

  //   if (!token){
  //     setIsAuthenticate(false);
  //     return;
  //   }

  //   try{
  //       const decoded = jwtDecode(token);
  //       const expDate = decoded.exp;

  //       if (Date.now()/1000 > expDate){
  //         const res = await auth_api.post('/refresh/',{refresh: refresh});

  //         if (res.status===200){
  //           setIsAuthenticate(true);
  //           localStorage.setItem(AccessToken,res.data.access);
  //         }

  //         else{
  //           setIsAuthenticate(false);
  //         }}

  //       else{
  //         setIsAuthenticate(true)
  //       }
  //     }
    
  //   catch(err){
  //   console.log('token auth failed',err.data)
  //   setIsAuthenticate(false)
  //   }

  // }
  const logout_nav = ()=>{
    localStorage.removeItem(AccessToken);
    localStorage.removeItem(RefreshToken);
    logout()
  }
  const navItems = ['Home', 'Demo', 'About', 'Contact','Login','Profile','Logout'];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md max-w-screen fixed top-0 w-screen z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-purple-600 dark:text-white">
            BrainScanAI
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navItems
              .filter((item)=> !(item==='Login'&& isAuthenticate) &&
                      !((item==='Profile' || item==='Logout' )&& !isAuthenticate)
                      )
              .map((item) => (
              <Link
                key={item}
                to={ (item==='Home' || item==='Logout') ? '/':`/${item.toLowerCase().replace(/\s/g, '')}`}
                className="text-gray-700 dark:text-gray-200 hover:text-purple-600 transition"
                onClick={item==='Logout' ? logout_nav:undefined}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '')}`}
              className="block text-gray-700 dark:text-gray-200 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav_bar;
