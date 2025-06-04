import React from 'react'
import Content from '../Props/Content'

function About() {
  return (
    <div className=" h-screen 
    bg-[url(../src/assets/andrew-ridley-jR4Zf-riEjI-unsplash.jpg)] bg-cover
    pt-50 w-381
    " 
    >
    <section className='flex justify-center items-center '>
    <Content
    title='About'
    content = {`BrainScanAI is an AI-powered web tool that 
    analyzes medical scan images to detect suspected brain tumors using deep learning models. Users can upload a brain scan, and our system will process it using a trained model to provide predictions. 
    Developed for simplicity, speed, and learning.`}
    disclaimer='This is purely for educational purpose'
    css_change='h-80 w-200 p-9'
    title_css='flex justify-center mb-5'
    content_css='mb-10'
    
    />
    </section>
  </div>
  )
}

export default About