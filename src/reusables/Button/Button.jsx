import React from 'react'
import Arrow from "../Arrow/Arrow"
import "./Button.css";


const Button = ({btnText,color,backgroundColor,className,hasArrow,hover}) => {
  return (
    <button style={{color,backgroundColor}} className={`btn btn-${color} ${className} ${hasArrow ? 'start' : 'center'} ${hover}`}>
        {btnText}
        {hasArrow && <Arrow color={color}/>}
    </button>
  )
}

export default Button