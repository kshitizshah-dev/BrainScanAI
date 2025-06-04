import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { AccessToken } from '../AuthConstants';

function Upload_field() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    console.log("Sending file:", image);
    // formData.append('name',name);
    const token = localStorage.getItem(AccessToken)
    const headers = {
      'Content-Type': 'multipart/form-data',
      };
    console.log(token)
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
      }

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/brain_tumor_api/', formData, {
          headers: headers,
        responseType: 'blob',
        
      });
      const img_url = URL.createObjectURL(res.data)
      setResponse(img_url);

    } catch (err) {
      console.error(err);
      setResponse({ error: 'Prediction failed' });
    }
  };

  return (
    <div
    className="bg-[url('src//assets/sandip-kalal-tcf9V6PDNoA-unsplash.jpg')] 
    bg-cover bg-center bg-no-repeat w-screen  h-screen flex justify-center items-center">

      <div className="bg-blue-900 flex flex-col items-center min-h-50 max-h-160 rounded-xl w-140 gap-2 p-2">
      <h1 className='pt-2'>Tumor Detection</h1>
      <form onSubmit={handleSubmit} className='pt-4 flex flex-col '>
        {/* name field */}
        {/* <input type="text" onChange={(e)=> setName(e.target.value)}
        className='bg-green-500'
        /> */}

        {/* image field */}
        <div className="flex justify-center">
        <input type="file" onChange={(e) => setImage(e.target.files[0])} 
          className='bg-blue-500'
        />
        </div>


        {/* Preview field */}
        {image && (
          <h2>Preview</h2>
        )}
        {image &&(
          <img className='h-50 w-80' src={URL.createObjectURL(image)} alt="" />
        )}
        

        {/* response field */}
        {response &&(
          <h2>Results</h2>
        )}
        {response && (
       <img className='h-50 w-80' src={response} alt="Prediction Mask" />
        )}

        {/* Submit button */}
        <div className="flex justify-center pt-4">
        <button className='flex justify-center h-10 w-20 rounded-3xl' type="submit">Submit</button>
        </div>
      </form>

      </div>
    </div>
  );
}

export default Upload_field