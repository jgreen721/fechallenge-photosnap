import React from 'react'
import {Hero} from "./components"
import {StoriesGallery} from "./components"
import {motion} from "framer-motion"
import {days_voyage, architecturals, behind_the_waves,calm_waters,cityscapes,dark_forest,king_on_africa,land_of_dreams,milky_way,mountains,rage_of_the_sea,running_free,somwarpet,trip_to_nowhere,unforeseen_corners,world_tour,days_voyageMobile,architecturalsMobile,behind_the_wavesMobile,calm_watersMobile,cityscapesMobile,dark_forestMobile,king_on_africaMobile,land_of_dreamsMobile,milky_wayMobile,moon_of_appalaciaMobile,mountainsMobile,rage_of_the_seaMobile,running_freeMobile,somwarpetMobile,trip_to_nowhereMobile,unforeseen_cornersMobile,world_tourMobile} from "../../const"

const Stories = () => {
  const stories = [
    {id:1,title:"The Mountains",author:"John Appleseed",date:"April 16th 2020",img:{desktop:mountains,tablet:mountains,mobile:mountainsMobile},delay:1},
    {id:2,title:"Sunset Cityscapes",author:"Benjamin Cruz",date:"April 14th 2020",img:{desktop:cityscapes,tablet:cityscapes,mobile:cityscapesMobile},delay:2},
    {id:3,title:"18 Days Voyage",author:"Alexei Boradin",date:"April 11th 2020",img:{desktop:days_voyage,tablet:days_voyage,mobile:days_voyageMobile},delay:3},
    {id:4,title:"Architecturals",author:"Samantha Brooke",date:"April 9th 2020",img:{desktop:architecturals,tablet:architecturals,mobile:architecturalsMobile},delay:4},
    {id:5,title:"World Tour 2019",author:"Timothy Wagner",date:"April 7th 2020",img:{desktop:world_tour,tablet:world_tour,mobile:world_tourMobile},delay:1},
    {id:6,title:"Unforeseen Corners",author:"William Malcolm",date:"April 3rd 2020",img:{desktop:unforeseen_corners,tablet:unforeseen_corners,mobile:unforeseen_cornersMobile},delay:2},
    {id:7,title:"King on Africa: Part",author:"Time Hillenburg",date:"March 29th 2020",img:{desktop:king_on_africa,tablet:king_on_africa,mobile:king_on_africaMobile},delay:3},
    {id:8,title:"The Trip to Nowhere",author:"Felicia Rourke",date:"March 21st 2020",img:{desktop:trip_to_nowhere,tablet:trip_to_nowhere,mobile:trip_to_nowhereMobile},delay:4},
    {id:9,title:"Rage of The Sea",author:"Mohammed Abdul",date:"March 19th 2020",img:{desktop:rage_of_the_sea,tablet:rage_of_the_sea,mobile:rage_of_the_seaMobile},delay:1},
    {id:10,title:"Running Free",author:"Michelle",date:"March 16th 2020",img:{desktop:running_free,tablet:running_free,mobile:running_freeMobile},delay:2},
    {id:11,title:"Behind the Waves",author:"Lamar Wilson",date:"March 11th 2020",img:{desktop:behind_the_waves,tablet:behind_the_waves,mobile:behind_the_wavesMobile},delay:3},
    {id:12,title:"Calm Waters",author:"Samantha Brooke",date:"March 9th 2020",img:{desktop:calm_waters,tablet:calm_waters,mobile:calm_watersMobile},delay:4},
    {id:13,title:"The Milky Way",author:"Benjamin Cruz",date:"March 5th 2020",img:{desktop:milky_way,tablet:milky_way,mobile:milky_wayMobile},delay:1},
    {id:14,title:"Night at The Dark Forest",author:"Mohammed Abdul",date:"March 4th 2020",img:{desktop:dark_forest,tablet:dark_forest,mobile:dark_forestMobile},delay:2},
    {id:15,title:"Somwarpet's Beauty",author:"Michelle",date:"March 1st 2020",img:{desktop:somwarpet,tablet:somwarpet,mobile:somwarpetMobile},delay:3},
    {id:16,title:"Land of Dreams",author:"William Malcolm",date:"February 25th 2020",img:{desktop:land_of_dreams,tablet:land_of_dreams,mobile:land_of_dreamsMobile},delay:4},
  ]
  return (
    <motion.div initial={{filter:'hue-rotate(90deg',scale:.75}} animate={{filter:"hue-rotate(0deg)",scale:1}} transition={{duration:1,type:"spring"}} exit={{filter:'hue-rotate(90deg)',scale:0}} className="view-container">
      <Hero/>
     
      <StoriesGallery stories={stories}/>
    </motion.div>
  )
}

export default Stories