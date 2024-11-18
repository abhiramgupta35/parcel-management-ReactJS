import React from 'react'
import "./Hero.css"
import bannerImg from "./banner.webp"

const Hero = () => {
    return (
        <div className='hero-container'>
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        A trusted provider of<br/>
                        <strong>courier services.</strong></h1>
                    <p>We deliver your products safely to your home in a reasonable time.</p>
                    <a href="/parcelform" className="get-started-button">Get started</a>
                </div>
                <div className="hero-image" >
                    <img src={bannerImg} alt="img"/>
                </div>
            </section>

          
        </div>
    )
}

export default Hero