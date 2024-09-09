import React from 'react'
import {Link} from "react-router-dom"
import "./MediaLinkIcon.css"

const MediaLinkIcon = ({siteLink}) => {
  
  return   (
    <li className="footer-media-link-item">
        <Link className="media-link" to={siteLink.url}>
            {siteLink.fontAwesome}
        </Link>
    </li>
  ) 
}

export default MediaLinkIcon