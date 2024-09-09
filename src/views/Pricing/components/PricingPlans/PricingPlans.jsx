import React, {useRef} from 'react'
import { useObserver } from '../../../../hooks/useObserver'
import { PricingPlan } from '../../../../reusables'
import "./PricingPlans.css"

const PricingPlans = ({isMonthly}) => {
  const pricingPlans =[
    {id:1,title:"Basic",blurb:"Includes basic usage of our platform. Recommended for new and aspiring photographers.",price:{month:19.00,year:190.00}},
    {id:2,title:"Pro",blurb:"More advanced features available. Recommended for photography veterans and professionals.",price:{month:39.00,year:390.00}},
    {id:3,title:"Business",blurb:"Additional features available such as more detailed metrics. Recommended for business owners.",price:{month:99.00,year:990.00}},
  ]
  const plansRef = useRef();
  const {inView} = useObserver(plansRef);

  return (
    <div ref={plansRef} className="pricing-plans-parent">
      <ul className="plans-list">
        {pricingPlans.map(plan=>(
          <PricingPlan key={plan.id} inView={inView} isMonthly={isMonthly} plan={plan}/>
        ))}
      </ul>
    </div>
  )
}

export default PricingPlans