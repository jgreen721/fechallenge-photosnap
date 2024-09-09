import React, {useRef} from 'react'
import { Button } from '../../reusables';
import "./Banner.css";
import { bgBeta,bgBetaTablet,bgBetaMobile } from '../../const';
import { useObserver } from '../../hooks/useObserver';


const Banner = () => {
    const bannerRef = useRef();
    const {inView} = useObserver(bannerRef);

  return (
    <div ref={bannerRef} className="banner-parent">
         <div style={{"--i":'.75s'}} className={`${inView ? 'clear-focus' : 'blur-element'} banner-content-row`}>
            <div className="banner-content-col flex-start">
                <div>
                    <h1 className="uppercase banner-h1">We're in beta</h1>
                    <h1 className="uppercase banner-h1">Get your invite</h1>
                    <h1 className="uppercase banner-h1">Today!</h1>
                </div>
            </div>
             <div className="banner-content-col flex-end">
                <Button btnText="Get an invite" color="white" hover="slide-right-hover" backgroundColor="transparent" className="start text-start-padding" hasArrow={true}/>
            </div> 
        </div> 
        <picture>
            <source media="(min-width:768px)" srcSet={bgBeta}/>
            <source media="(min-width:425px)" srcSet={bgBetaTablet}/>
            <img style={{"--i":".25s"}} src={bgBetaMobile} className={`gallery-img ${inView ? 'clear-focus' : 'blur-element'}`} alt="story-img"/>
        </picture>
    </div>
  )
}

export default Banner