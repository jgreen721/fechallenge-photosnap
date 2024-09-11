import React from 'react'
import "./FeatureItem.css"

const FeatureItem = ({item,inView}) => {

  return (
    // <div>
    <div style={{'--i':`${item.id/4}s`}}  className={`feature-item ${inView ? 'rise-up' : 'lowered-element'}`}>
        <div>
            <img src={item.icon} alt="item-icon" />
        </div>
        <div className="feature-item-text-content">
            <h3 className="feature-item-title">{item.title}</h3>
            <h4 className="feature-item-blurb">{item.blurb}</h4>
        </div>
    </div>
    // </div>
  )
}

export default FeatureItem