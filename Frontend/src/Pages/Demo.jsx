import React from 'react'
import DemoStep from '../Props/Steps'
function Demo() {
  return (
    <div className='bg-gray-900 pt-15 max-w-screen'>
        <DemoStep
        stepTitle='Step1: Go to the home page'
        description=''
        imageUrl={'src/assets/sandip-kalal-tcf9V6PDNoA-unsplash.jpg'}
        />

        <DemoStep
        stepTitle='Step2: Click on the upload placeholder'
        description=''
        imageUrl={'src/assets/sandip-kalal-tcf9V6PDNoA-unsplash.jpg'}
        />

        <DemoStep
        stepTitle='Step2: Choose the Brain Scan image you want to analyze'
        description=''
        imageUrl={'src/assets/sandip-kalal-tcf9V6PDNoA-unsplash.jpg'}
        />

        <DemoStep
        stepTitle='Step3: Click on Submit button'
        description=''
        imageUrl={'src/assets/sandip-kalal-tcf9V6PDNoA-unsplash.jpg'}
        />
        <DemoStep
        stepTitle='Step4: You will get your result in result section'
        description='If the results contain white spots, it means that has high likelyhood of containing tumor'
        imageUrl={'src/assets/sandip-kalal-tcf9V6PDNoA-unsplash.jpg'}
        />
    </div>
    
  )
}

export default Demo