import React from 'react'
import {motion} from "framer-motion"
import FeaturesSection from './components/FeaturesSections/FeaturesSection'
import { PageHeader } from '../../reusables'
import { featuresHero,mobileFeaturesHero,tabletFeaturesHero } from '../../const'

const Features = () => {
  const headerInfo = {img:{desktop:featuresHero,tablet:tabletFeaturesHero,mobile:mobileFeaturesHero},title:"Features",blurb:"  We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."}
  return (
    <motion.div initial={{translateX:-1500}} animate={{translateX:0}} exit={{translateX:1500}} transition={{duration:1}}>
      <PageHeader heroImg={headerInfo.img.desktop} tabletImg={headerInfo.img.tablet} mobileImg={headerInfo.img.mobile} title={headerInfo.title} blurb={headerInfo.blurb} />
      <FeaturesSection/>
    </motion.div>
  )
}

export default Features