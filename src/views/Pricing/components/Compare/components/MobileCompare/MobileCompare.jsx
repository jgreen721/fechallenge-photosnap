import React from 'react'
import "./MobileCompare.css"



const MobileFeatureItem=({feature,checkIcon})=>{
        const plans=[
            {id:1,plan:"basic"},
            {id:2,plan:"pro"},
            {id:3,plan:"business"}
        ]
    return (
        <li className="mobile-feature-item">
            <h3 className="mobile-feature-item-title uppercase">{feature.name}</h3>
            <ul className="plans">
                {plans.map(planItem=>(
                <li key={planItem.id} className="plan-item">
                    <h5 className="plan-item-title uppercase">{planItem.plan}</h5>
                    {feature[planItem.plan] && <img className="mobile-check" src={checkIcon} alt="check"/>}
                </li>
                ))}
            </ul>
        </li>
    )
}

const MobileCompare = ({features,checkIcon}) => {
  return (
    <div className="mobile-compare-parent">
        <h3 className="mobile-compare-title uppercase">The Features</h3>
        {features.map(feature=>(
            <MobileFeatureItem key={feature.id} feature={feature} checkIcon={checkIcon}/>
        ))}
    </div>
  )
}

export default MobileCompare