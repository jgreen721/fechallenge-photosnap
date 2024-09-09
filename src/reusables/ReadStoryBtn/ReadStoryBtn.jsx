import React from 'react'
import Arrow from "../Arrow/Arrow"
import "./ReadStoryBtn.css"

const ReadStoryBtn = ({id,inView,arrowSpace,delay}) => {
  return (
    <button style={{"--i":`${delay}s`}} className={`read-more-btn ${arrowSpace} ${inView && id % 2 == 0 ? `soft-slide-left` : `soft-slide-right`}`}>
        Read Story
    <div className="btn-arrow-div">
      <Arrow color="white"/>
    </div>
  </button>
  )
}

export default ReadStoryBtn