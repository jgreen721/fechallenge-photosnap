import { useState } from "react"
import {Routes, Route, useLocation} from "react-router-dom"
import {Home,Stories,Features,Pricing} from "./views"
import {Header,Banner,Footer} from "./components"
import { BlurOverlay } from "./reusables"
import {AnimatePresence} from "framer-motion"
import './App.css'



function App() {
  const location = useLocation();
  const [showMobile,setShowMobile] = useState(false);



  return (
    <div className={`app`}>
      {showMobile && <BlurOverlay/>}
       <Header showMobile={showMobile} setShowMobile={setShowMobile}/>
      <AnimatePresence mode="wait">
        <Routes location={location.pathname} key={location.pathname}>
          <Route path="/" element={<Home/>}/>
          <Route path="/stories" element={<Stories/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
      </AnimatePresence>
      {location.pathname == "/pricing" || location.pathname == "/features" && <Banner/>}
      <Footer/> 

    </div>
  )
}

export default App
