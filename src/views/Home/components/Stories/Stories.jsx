import React from 'react'
import { beautifulStoriesImg,beautifulStoriesTabletImg,beautifulStoriesMobileImg, createAndShareImg,createAndShareTabletImg, createAndShareMobileImg, designForEveryoneImg,designForEveryoneTabletImg, designForEveryoneMobileImg } from '../../../../const';
import { StoryItem } from '../../../../reusables';
import "./Stories.css";

const Stories = () => {
    const stories = [
        {id:1,title:"Create and share your photo stories",blurb:"Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",btnText:"Get an invite",color:"white",img:{desktop:createAndShareImg,tablet:createAndShareTabletImg,mobile:createAndShareMobileImg}},
        {id:2,title:"Beautiful stories everytime",blurb:"We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",btnText:"View the stories",color:"black",img:{desktop:beautifulStoriesImg,tablet:beautifulStoriesTabletImg,mobile:beautifulStoriesMobileImg}},
        {id:3,title:"Designed for everyone",blurb:"Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",btnText:"View the stories",color:"black",img:{desktop:designForEveryoneImg,tablet:designForEveryoneTabletImg,mobile:designForEveryoneMobileImg}}
    ]
  return (
    <div className="stories-parent">
        {stories.map(story=>(
            <StoryItem key={story.id} id={story.id} story={story}/>
        ))}
    </div>
  )
}

export default Stories