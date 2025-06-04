
import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import auth_api from '../hooks/api'
import Content from '../Props/Content'
import { Link } from 'react-router-dom'
import { AccessToken,RefreshToken,LogStatus } from '../AuthConstants'
import { AuthContext } from '../AuthContext';
import axios from 'axios'
import { useContext } from 'react';
function Login() {
  const [form,setForm] = useState({username:'',password:''});
  const [error,setError] = useState('');
  const nav =useNavigate()
  const{login} = useContext(AuthContext)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await auth_api.post('/token/',form);
      localStorage.setItem(AccessToken,response.data.access);
      localStorage.setItem(RefreshToken,response.data.refresh);
      localStorage.setItem(LogStatus,true)
      const token = localStorage.getItem(AccessToken)
      nav('/profile');
      console.log(token)
      console.log(response);
      login()

      // localStorage.setItem(AccessToken,response.data.ac)
    }
    catch(err){
      setError(err.response.data.detail);
    }
  }

  return (
     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Content
          title="Login"
          content="Welcome back! Please login to your account to continue."
          css_change="text-center h-22"
          title_css="text-3xl text-center mb-4"
          content_css="text-sm text-center mb-6"
        />

        <form className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4"
        onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="you@example.com"
              onChange={(e)=>{
                setForm({...form,username: e.target.value})}}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="••••••••"
              required
              onChange={(e)=>{
                setForm({...form,password:e.target.value})
              }}
            />
          </div>
          {error&&(
            <h2 className='bg-red-900 flex justify-center'> {error} </h2>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Login
          </button>
          <h2 className='flex justify-center gap-2'>If you have not sign in <Link to='/signup'> Click Here</Link></h2>
        </form>
      </div>
    </div>
  )
}

export default Login