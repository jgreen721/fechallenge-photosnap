import React from 'react'
import  Highlight  from '../Highlight/Highlight';
import "./PricingPlan.css";


const PricingPlan = ({plan,isMonthly,inView}) => {
  return (
   <div style={{"--i":`${plan.id/4}s`}} className={`pricing-plan ${inView ? 'rise-up' : 'lowered-element'}`}>
        <div style={{"--i":`${plan.id/2}s`}} className={`pricing-plan-content pricing-plan-desktop-mobile ${inView ? 'soft-slide-left' : 'off-left'}`}>
            <h3 className="plan-title">{plan.title}</h3>
            <h5 className="plan-blurb">{plan.blurb}</h5>
            <div>
            <h1 style={{"--i":`${plan.id/4}s`}} className={`plan-price ${isMonthly ? "fade-in-monthly" : "fade-in-yearly"}`}>$<span className="price">{!isMonthly ? plan.price.month.toFixed(2) : plan.price.year.toFixed(2)}</span></h1>
            <h5>per year</h5>
            </div>
            <button className={`plan-btn ${plan.id == 2 ? 'grey-bg-btn' : 'black-bg-btn'}`}>Pick Plan</button>
        </div>
        <div className="pricing-plan-tablet">
          <div className="pricing-plan-tablet-column">
            <div className="mobile-column-content">
            <h3 className="plan-title">{plan.title}</h3>
            <h5 className="plan-blurb">{plan.blurb}</h5>  
            <button className={`plan-btn ${plan.id == 2 ? 'grey-bg-btn' : 'black-bg-btn'}`}>Pick Plan</button>
          </div>
          </div>
          <div className="pricing-plan-tablet-column">
          <h1 className="plan-price">$<span className="price">{!isMonthly ? plan.price.month.toFixed(2) : plan.price.year.toFixed(2)}</span></h1>
            <h5>per year</h5>
          </div>
        </div>
        {/* <div className="mobile-highlight"> */}
        {plan.id == 2 && <Highlight className="highlight"/>}
        {/* </div> */}
    </div>
  )
}

export default PricingPlan