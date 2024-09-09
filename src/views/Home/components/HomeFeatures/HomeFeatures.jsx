import React, {useRef} from 'react'
import {FeatureItem} from "../../../../reusables"
import {responsiveSvg,noLimitSvg,embedSvg} from "../../../../const"
import { useObserver } from '../../../../hooks/useObserver'
import "./HomeFeatures.css"

const HomeFeatures = () => {
    const featureItems =[
        {id:1,title:"100% responsive",blurb:"No matter which device you're on, our site is fully responsive and stories look beautiful on any screen.",icon:responsiveSvg},
        {id:2,title:"No photo upload limit",blurb:"Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",icon:noLimitSvg},
        {id:3,title:"Available to embed",blurb:"Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",icon:embedSvg},
    ]
    const featuresRef = useRef();
    const {inView} = useObserver(featuresRef);


  return (
    <div ref={featuresRef} className="home-features-row">
        {featureItems.map(featureItem=>(
            <FeatureItem key={featureItem.id} inView={inView} item={featureItem}/>
        ))}
    </div>
  )
}

export default HomeFeatures