import React from 'react'
import {Link} from "react-router-dom"
import {Button} from ".."
import "./MobileMenu.css"

const MobileMenu = ({showMobile,setShowMobile}) => {
  const mobileLinks=[
    {id:1,name:"Stories",href:"/stories"},
    {id:2,name:"Features",href:"/features"},
    {id:3,name:"Pricing",href:"/pricing"},
  ]
  return (
    <div className={`${showMobile ? 'show-mobile-menu' : 'hide-mobile-menu'} mobile-menu`}>
      <ul className="mobile-links">
        {mobileLinks.map(mobileItem=>(
          <li onClick={()=>setShowMobile(false)} key={mobileItem.id} className="mobile-link-item">
             <Link className="mobile-link" to={mobileItem.href}>
                <h5>{mobileItem.name}</h5>
              </Link>
          </li>
        ))}
      </ul>
      <Button className="w-full flex-center regular-padding" hover="mute-hover" btnText="Get an Invite" backgroundColor="black" color="white" hasArrow={false}/>
    </div>
  )
}

export default MobileMenu