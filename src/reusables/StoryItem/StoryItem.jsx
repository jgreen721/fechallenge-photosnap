import React, {useRef} from 'react'
import { useObserver } from '../../hooks/useObserver'
import Button from "../Button/Button"
import "./StoryItem.css"

const StoryItem = ({story}) => {
    // console.log(story)
    const storyRef = useRef();
    const {inView} = useObserver(storyRef);
  return (
    <div ref={storyRef} className={`story-item-row`}>
        <div className="desktop-tablet-row">
          {story.id%2 == 0 && 
      <div style={{"--i":".25s"}} className={`story-item-div story-item-img-div ${inView ? 'slide-left' : 'off-right'}`}>
        <picture>
            <source media="(min-width:768px)" srcSet={story.img.desktop}/>
            <source media="(min-width:375px)" srcSet={story.img.tablet}/>
            <img src={story.img.mobile} className="story-img" alt="story-img"/>
        </picture>           
      </div>
          }
        <div style={{"--i":"1s"}} className={`story-item-content-div story-item-div ${inView ? 'clear-focus' : 'blur-element'} ${story.id == 1 ? 'black-bg-white-text' : ''}`}>
          <div className={`story-item-content`}>
            <h1 className="story-item-title">{story.title}</h1>
            <p className="story-item-blurb">{story.blurb}</p>
            <Button btnText={story.btnText} color={story.color} hasArrow={true} backgroundColor="transparent" className="black-bg-white-text text-start-padding" hover="slide-right-hover"/>
          </div>
        </div>
        {story.id%2 != 0 && 
        <div style={{"--i":".25s"}} className={`story-item-img-div story-item-div ${inView ? 'slide-right' : 'off-left'}`}>

         <picture>
            <source media="(min-width:750px)" srcSet={story.img.desktop}/>
            <source media="(min-width:550px)" srcSet={story.img.tablet}/>
            <img src={story.img.tablet} className="story-img" alt="story-img"/>
        </picture>         
      </div>
}
</div>

<div className="mobile-stories">
    <div className="story-item-div story-item-img-div">
        <picture>
            <source media="(min-width:768px)" srcSet={story.img.desktop}/>
            <source media="(min-width:425px)" srcSet={story.img.tablet}/>
            <img src={story.img.mobile} className="story-img" alt="story-img"/>
        </picture>           
      </div>
      <div className={`story-item-content-div story-item-div ${story.id == 1 ? 'black-bg-white-text' : ''}`}>
          <div className="story-item-content">
            <h1 className="story-item-title">{story.title}</h1>
            <p className="story-item-blurb">{story.blurb}</p>
            <Button btnText={story.btnText} color={story.color} hasArrow={false} backgroundColor="transparent" className="black-bg-white-text" hover="slide-right-hover"/>
          </div>
        </div>
    </div>
 </div>
  )
}

export default StoryItem