import React from 'react'
import {moon_of_appalacia,moon_of_appalaciaTablet, moon_of_appalaciaMobile} from "../../../../const"
import ReadStoryBtn from '../../../../reusables/ReadStoryBtn/ReadStoryBtn'
import "./Hero.css"

const Hero = () => {
  return (
    <header className="stories-hero">

       <div className="hero-img-div">
          <picture>
            <source media="(min-width:768px)" srcSet={moon_of_appalacia}/>
            <source media="(min-width:375px)" srcSet={moon_of_appalaciaTablet}/>
            <img src={moon_of_appalaciaMobile} className="stories-hero-img" alt="stories-hero-img"/>
          </picture>  
      </div> 
       <div className="stories-hero-text-content-wrapper">
           <div className="stories-hero-text-content">
             <h3 className="uppercase">Last Months Featured Story</h3>
             <h1 className="uppercase hero-title">Hazy Full Moon of Appalachia</h1>
             <h5><span className="thin mx-2">March 2nd 2020</span> by John Appleseed</h5>
             <p className="hero-blurb mid-thin">  
             The dissected plateau area, while not actually made up of geological mountains, 
             is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
            and while the ridges are not high, the terrain is extremely rugged.</p>
             <ReadStoryBtn id={1} inView={true} delay={.5} arrowSpace="start"/>
         </div>
       </div>
     </header>

  )
}

export default Hero