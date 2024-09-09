import React from 'react'
import {Link} from "react-router-dom"
import {Logo,Arrow,MediaLinkIcon} from "../../reusables"
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube,FaPinterest, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css"

const Footer = () => {
    const mediaLinks=[
        {id:1,name:"Facebook",icon:<IoLogoFacebook/>,fontAwesome:<i className="fab fa-facebook"/>,url:"https://facebook.com"},
        {id:2,name:"Youtube",icon:<FaYoutube/>,fontAwesome:<i className="fab fa-youtube"/>,url:"https://youtube.com"},
        {id:3,name:"X",icon:<FaXTwitter/>,fontAwesome:<i className="fab fa-twitter"/>,url:"https://x.com"},
        {id:4,name:"Pinterest",icon:<FaPinterest/>,fontAwesome:<i className="fab fa-pinterest"/>,url:"https://pinterest.com"},
        {id:5,name:"Instagram",icon:<FaInstagram/>,fontAwesome:<i className="fab fa-instagram"/>,url:"https://instagram.com"},
    ]
    const siteLinks =[
        {id:1,name:"Home",link:"/"},
        {id:2,name:"Stories",link:"/stories"},
        {id:3,name:"Features",link:"/features"},
        {id:4,name:"Pricing",link:"/pricing"},
    ]
  return (
    <footer className="footer">
        <div className="footer-content">
        <div className="footer-col">
            <div className="footer-col-content-column">
            <div className="footer-logo-and-links">
             <Logo/>
                <ul className="footer-site-links tablet-site-links">
                    {siteLinks.map((siteLink,idx)=>(
                        <li key={siteLink.id} className="tablet-site-link site-link-item">
                            <Link className="site-link" to={siteLink.link}>
                                <h4>{siteLink.name}</h4>
                            </Link>
                        </li> 
                    ))}
                </ul>
             </div>
             <ul className="footer-media-links">
                    {mediaLinks.map((siteLink,idx)=>(
                          <MediaLinkIcon key={siteLink.id} siteLink={siteLink}/>

                    ))}
                </ul>            
            </div>

                <ul className="footer-site-links desktop-mobile-site-links">
                    {siteLinks.map(siteLink=>(
                        <li key={siteLink.id} className="desktop-mobile-site-link site-link-item">
                            <Link className="site-link" to={siteLink.link}>
                                <h4>{siteLink.name}</h4>
                            </Link>
                        </li> 
                    ))}
                </ul> 
        </div>
        <div className="footer-col">
            <div className="footer-right-col-content">
               <button className="invite-btn">
                    <h5>Get an Invite</h5>
                    <Arrow color="white"/>
               </button>
                <p className="muted mid-thin">Copyright 2019. All Rights Reserved</p>
            </div>
        </div>

        </div>
    </footer>
  )
}

export default Footer