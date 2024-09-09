import React  from 'react'
import "./GalleryItem.css";
// import Arrow from "../Arrow/Arrow"
import ReadStoryBtn from '../ReadStoryBtn/ReadStoryBtn';


const GalleryItem = ({galleryItem,delay,inView}) => {
console.log("Delay",inView)
  return (
     <li className={`gallery-item gallery-item-${galleryItem.id}`}>
    <picture>
        <source media="(min-width:768px)" srcSet={galleryItem.img.desktop}/>
        <img style={{"--i":`${delay}s`}} className={`gallery-item-img ${inView ? 'clear-focus' : 'blur-element'}`} src={galleryItem.img.mobile} alt="story-img"/>
    </picture> 
      <div className="gallery-item-content">
      <div style={{"--i":`${delay * 1.2}s`}} className={`gallery-item-title-author-div ${inView ? 'clear-focus' : 'blur-element'}`}>
        <h3 className="gallery-item-title">{galleryItem.title}</h3>
        <h5 className="gallery-item-author">by {galleryItem.author}</h5>
      </div>
     
      <ReadStoryBtn arrowSpace="space-between" id={galleryItem.id} delay={delay} inView={inView}/>
      </div>
     </li>
  
  )
}

export default GalleryItem