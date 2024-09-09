import React from 'react'
import "./BurgerIcon.css"

const BurgerIcon = ({showMobile,setShowMobile}) => {
  return (
    <button onClick={()=>setShowMobile(showMobile=>showMobile=!showMobile)} className="burger-icon-btn">
        <div className={`line line1 ${showMobile ? 'rotate-left' : ''}`}></div>
        <div className={`line line2 ${showMobile ? 'rotate-right' : ''}`}></div>
    </button>
  )
}

export default BurgerIcon