import React, {useRef} from 'react'
import "./FeaturesSection.css"
import { FeatureItem } from '../../../../reusables'
import {responsiveSvg,noLimitSvg,embedSvg, customDomainSvg,boostExposureSvg,dragDropSvg} from "../../../../const"
import { useObserver } from '../../../../hooks/useObserver'

const FeaturesSection = () => {
  const featureItems =[
    {id:1,title:"100% responsive",blurb:"No matter which device you're on, our site is fully responsive and stories look beautiful on any screen.",icon:responsiveSvg},
    {id:2,title:"No photo upload limit",blurb:"Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",icon:noLimitSvg},
    {id:3,title:"Available to embed",blurb:"Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",icon:embedSvg},
    {id:4,title:"Custom domain",blurb:"With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!.",icon:customDomainSvg},
    {id:5,title:"Boost your exposure",blurb:"Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",icon:boostExposureSvg},
    {id:6,title:"Drag and drop image",blurb:"Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",icon:dragDropSvg},
]
const featuresRef = useRef();
const {inView} = useObserver(featuresRef);


  return (
    <div ref={featuresRef} className="features-section">
      <div className="features-grid">
      {featureItems.map(featureItem=>(
          <FeatureItem inView={inView} key={featureItem.id} item={featureItem}/>
      ))}
      </div>
    </div>
  )
}

export default FeaturesSection