import React, { useState } from 'react'
import auth_api from '../hooks/api';
import Content from '../Props/Content'
import axios from 'axios';

function Signup() {
  const [form,setForm] = useState({username:'',email:'',password:'',password2:''});
  const [error,setError] = useState('');
  const [message,setMessage] =useState([]);
  
  const handlesubmit = async (e)=>{
    e.preventDefault();
    try{
      await auth_api.post('/signup/',form);
      setMessage('Your account has been created');
    }
    catch(err){
      console.log(err);
      console.log(err.response)
      console.log(err.response?.data)
      const err_msg= err.response.data.error
      if (err_msg){
        const err_list = Object.values(err_msg)
          .flat()
          .map((res)=>String(res))
        setError(err_list)
      }
      else{
        setError('something went wrong')
      }

    }
  }
  return (
    <div className="bg-gray-100 h-screen flex items-center dark:bg-gray-900 px-10 py-10">
      <div className="w-[500px] mx-auto">
        <Content
          title="Sign Up"
          css_change='h-15 flex justify-center pt-2'
        />

        <form className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4" onSubmit={handlesubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Username</label>
            <input
              type="text"
              placeholder="User123"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md"
              required
              onChange={(e)=>{
                setForm({...form,username: e.target.value})
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md"
              required
              onChange={(e)=>{
                setForm({...form,email: e.target.value})
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md"
              required
              onChange={(e)=>{
                setForm({...form,password: e.target.value})
              }}
            />
          </div>
                    <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md"
              required
              onChange={(e)=>{
                setForm({...form,password2: e.target.value})
              }}
            />
          </div>

          {error.length>0 &&(
            error.map((err_msg,index)=>(
               <h2 className='bg-red-900 flex justify-center'>{err_msg}</h2>
          )))
          }
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup