import React from 'react'
import {HomeFeatures,GalleryRow,Stories} from "./components"
import {motion} from "framer-motion"


const Home = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{scale:0,opacity:0}} transition={{ease:'easeIn',duration:2.5}} className="view-container">
          <Stories/>
          <GalleryRow/>
          <HomeFeatures/>
    </motion.div>
  )
}

export default Home