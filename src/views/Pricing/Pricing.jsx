import React, {useState} from 'react'
import {motion,easeIn} from "framer-motion"
import {PageHeader} from "../../reusables"
import {Compare, PricingPlans,PaymentToggle} from "./components"
import { pricingHero, pricingHeroTablet,pricingHeroMobile } from '../../const' 
import "./Pricing.css"

const Pricing = () => {
  const headerInfo = {img:{desktop:pricingHero,tablet:pricingHeroTablet,mobile:pricingHeroMobile},title:"Pricing",blurb:"Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."}
  const [isMonthly,setIsMonthly] = useState(false)
  return (
    <motion.div initial={{filter:'blur(50px)',translateY:50}} animate={{filter:'blur(0px)',translateY:0}} exit={{filter:'blur(55px)',opacity:0}} transition={{ease:'easeIn',duration:1}}>
        <PageHeader heroImg={headerInfo.img.desktop} tabletImg={headerInfo.img.tablet} mobileImg={headerInfo.img.mobile} title={headerInfo.title} blurb={headerInfo.blurb}/>
        <PaymentToggle setIsMonthly={setIsMonthly} isMonthly={isMonthly}/>
        <PricingPlans isMonthly={isMonthly}/>
        <Compare/>
    </motion.div>
  )
}

export default Pricing