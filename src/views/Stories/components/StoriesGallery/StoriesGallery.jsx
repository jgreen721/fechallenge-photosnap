import React, {useRef} from 'react'
import { useObserver } from '../../../../hooks/useObserver'
import {GalleryItem} from "../../../../reusables"
import "./StoriesGallery.css"

const StoriesGallery = ({stories}) => {
  const galleryRef = useRef()
  const {inView} = useObserver(galleryRef)
  return (
    <div ref={galleryRef} className="stories-gallery">
        {stories.map(story=>(
            <GalleryItem inView={inView} key={story.id} galleryItem={story} delay={story.delay/2}/>
        ))}
    </div>
  )
}

export default StoriesGallery