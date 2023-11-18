import React from 'react'
import '../styling/homepagetesting.css'
import img1 from '../assets/images/homepage-img1.jpg'
import img2 from'../assets/images/homepage-img2.jpg'
import img3 from'../assets/images/homepage-img3.jpg'

const Homepagetesting = () => {
  return (
    <header className='parent-container'>
        <div className='img-container-box first-img'>
            <img src={img1} alt="React Image1" className='img-container img1'/>
        </div>
        <div className='img-container-box'>
            <img src={img3} alt="React Image2" className='img-container img2'/>
        </div>
        <div className='img-container-box third-img'>
            <img src={img2} alt="React Image3" className='img-container img3'/>
        </div>
    </header>
  )
}

export default Homepagetesting