import React, { useState, useEffect } from 'react'
import UserCard from '../Props/UserCard'
import { AccessToken } from '../AuthConstants'
import axios from 'axios'
function Profile() {
  const [response,setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const load = async ()=>{
    const token = localStorage.getItem(AccessToken)
    if (token){

      try{const res = await axios.get('http://127.0.0.1:8000/api/brain_tumor_api/',{
          headers:{
          'Authorization':`Bearer ${token}`,
          }
          }
          )
          if (res.status===200){
            console.log(res.data)
            setResponse(res.data)
            setLoading(false)
            }
          else{
            console.log(res.status)
            setLoading(false)
          }
        }
      catch(err){
        console.log(err)
        setLoading(false)
        }
          
      }
  }
  useEffect(()=>{
    load()
  },[])

  if (loading) return <p>Loading...</p>;

  if (!response || response.length === 0)
    return <p>No history data found.</p>;


  return (
    <div className=" w-screen h-screen mt-15  overflow-x-hidden">
      <UserCard
      name= 'kshitiz'
      avatarUrl='src/assets/sandip-kalal-tcf9V6PDNoA-unsplash.jpg'
      />
      <div className='bg-amber-900 p-10 rounded-lg shadow-lg max-w-6xl mx-auto'>
      <h2>User History</h2>
      <table className='table-auto w-full border-collapse border border-gray-300'>
        <thead>
          <tr>
            <th>SN</th>
            <th>Original Image</th>
            <th>Predicted Image</th>
            <th>Upload Date</th>
          </tr>
        </thead>
        <tbody>
          {response?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={item.originalImage}
                  alt="Original"
                  style={{ width: 100, height: 100 }}
                />
              </td>
              <td>
                <img
                  src={item.predictedImage}
                  alt="Predicted"
                  style={{ width: 100, height: 100 }}
                />
              </td>
              <td>{new Date(item.uploadDate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

  )
}

export default Profile