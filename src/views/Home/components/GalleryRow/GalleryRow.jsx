import React, {useRef} from 'react'
import {GalleryItem} from "../../../../reusables"
import {mountains,cityscapes,days_voyage,architecturals,mountainsMobile,cityscapesMobile,days_voyageMobile,architecturalsMobile} from "../../../../const"
import { useObserver } from '../../../../hooks/useObserver'
import "./GalleryRow.css"


const GalleryRow = () => {
    const galleryItems =[
        {id:1,title:"The Mountains",author:"John Appleseed",img:{desktop:mountains,mobile:mountainsMobile}},
        {id:2,title:"Sunset Cityscapes",author:"Benjamin Cruz",img:{desktop:cityscapes,mobile:cityscapesMobile}},
        {id:3,title:"18 Days Voyage",author:"Alexei Borodin",img:{desktop:days_voyage,mobile:days_voyageMobile}},
        {id:4,title:"Architecturals",author:"Samantha Brooke",img:{desktop:architecturals,mobile:architecturalsMobile}},
    ]
    const galleryRef = useRef();
    const {inView} = useObserver(galleryRef);
  return (


    <div ref={galleryRef} className="gallery-row">
      {/* <h1>gallery row {galleryItems.length}</h1> */}
      {galleryItems.map(galleryItem=>(
     <GalleryItem key={galleryItem.id} inView={inView} delay={(galleryItem.id)} galleryItem={galleryItem}/>
      ))}
    </div>
    
  )
}

export default GalleryRow