import React from 'react'
import "./Arrow.css"

const Arrow = ({color}) => {
  return (
    <div style={{backgroundColor:color, "--color":color}} className="arrow"></div>

  )
}

export default Arrow