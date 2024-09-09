import React, {useState} from 'react'
import {Logo,Button,BurgerIcon,MobileMenu} from "../../reusables"
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
  const headerLinks = [
    {id:1,name:"Stories",href:"/stories"},
    {id:2,name:"Features",href:"/features"},
    {id:3,name:"Pricing",href:"/pricing"},
  ]
  const [showMobile,setShowMobile] = useState(false);


  onresize=()=>{
    if(innerWidth > 650){
      setShowMobile(false)
    }
  }
  return (
    <header className="header">
      <div className="header-content-row">
        <Link className="home-logo-link" to="/">
          <Logo/>
        </Link>
        <ul className="header-links desktop-tablet">
          {headerLinks.map(link=>(
            <li key={link.id} className="header-link-item">
              <Link className="header-link" to={link.href}>
                <h5>{link.name}</h5>
              </Link>
            </li>
          ))}
        </ul>
        <div className="desktop-tablet">
        <Button color="white" backgroundColor="black" className="regular-padding" hover="mute-hover" btnText="Get an invite"/>
        </div>
        <div className="mobile">
          <BurgerIcon showMobile={showMobile} setShowMobile={setShowMobile}/>
        </div>
      </div>
      <MobileMenu showMobile={showMobile} setShowMobile={setShowMobile}/>
    </header>
  )
}

export default Header