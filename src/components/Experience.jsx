import '../styles/Experience.css';
import React from 'react'

const Experience = () => {
  return (
    <div className='experience'>
        <h1>Experience</h1>
        
        <div className='experience-container'>
        <div className='experience-12'>
            <div className='experience-item'>
                <h3>Full-Stack Developer</h3>
                <p>COMPANY A</p>
            </div>

            <div className='experience-item'>
                <h3>Backend Developer</h3>
                <p>COMPANY B</p>
            </div>
        </div>
        </div>

        <div className='experience-container'>
        <div className='experience-12'>
            <div className='experience-item'>
                <h3>Frontend Developer</h3>
                <p>COMPANY C</p>
            </div>

            <div className='experience-item'>
                <h3>UI/UX Designer</h3>
                <p>COMPANY D</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Experience