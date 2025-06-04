import React from 'react'
import Nav_bar from './Props/Nav_bar'
import Upload_field from './Props/Upload_field'
import Home from './Pages/Home'
import { Outlet } from 'react-router-dom'
import Footer from './Props/Footer'

function Layout() {
  return (
    <>
    <Nav_bar/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default Layout