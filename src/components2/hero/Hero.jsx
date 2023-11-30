import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="container-h">
                <h1>The <span>Best</span></h1>
                <h1> <span>Foods</span>Delivered</h1>

            </div>
            <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="hero" />
        </div>
    </div>
  )
}

export default Hero