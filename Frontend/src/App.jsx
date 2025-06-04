import { useState } from 'react'
import axios from 'axios'
import { createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Demo from './Pages/Demo';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import { AuthProvider } from './AuthContext';
import RestrictRoute from './Hooks/RestrictRoute';
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}>
      </Route>
      <Route path='demo' element={<Demo/>}>
      </Route>
      <Route path='login' element={<Login/>}>
      </Route>
      <Route path='about' element={<About/>}>
      </Route>
      <Route path='contact' element={<Contact/>}>
      </Route>
      <Route path='signup' element={<Signup/>}>
      </Route>
      <Route path='profile'
      element={
        <RestrictRoute>
          <Profile/>
        </RestrictRoute>
      }
      />
    </Route>
  )
)

export default Router;
