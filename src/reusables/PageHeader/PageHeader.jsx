import React from 'react'
import Highlight from "../Highlight/Highlight"
import "./PageHeader.css"

const PageHeader = ({heroImg,tabletImg,mobileImg,title,blurb}) => {
  return (
  <div className="page-header">
     <div className="desktop-tablet-header">

       <div className="desktop-header-col">
       <Highlight className="left-middle-highlight"/>

     <div className="page-header-content">
          <h1 className="uppercase page-header-title">{title}</h1>
          <p className="page-header-blurb">{blurb}</p>
    </div>
    </div>
    <div className="desktop-header-col">
        <picture>
          <source media="(min-width:768px)" srcSet={heroImg}/>
          <source media="(min-width:425px)" srcSet={tabletImg}/>
          <img src={mobileImg} className="page-header-img" alt="story-img"/>
        </picture> 
   </div>
      </div>
    <div className="mobile-page-header">

      <div className="mobile-header-row">
          <picture>
              <source media="(min-width:768px)" srcSet={heroImg}/>
              <source media="(min-width:425px)" srcSet={tabletImg}/>
              <img src={mobileImg} className="page-header-img" alt="story-img"/>
          </picture>
      </div>
      <div className="mobile-header-row">
      <Highlight className="top-left-highlight"/>

        <div className="mobile-header-content">
          <h1 className="uppercase page-header-title">{title}</h1>
          <p className="page-header-blurb">{blurb}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PageHeader