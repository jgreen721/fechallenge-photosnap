import React, {useRef} from 'react'
import { MobileCompare,CompareTable } from './components'
import {checkSvg} from "../../../../const"
import {useObserver} from "../../../../hooks/useObserver"
import "./Compare.css"

const Compare = () => {
  const features = [
    {id:1,name:"Unlimited story posting",basic:true,pro:true,business:true},
    {id:2,name:"Unlimited photo upload",basic:true,pro:true,business:true},
    {id:3,name:"Embedding custom content",basic:false,pro:true,business:true},
    {id:4,name:"Customize metadata",basic:false,pro:true,business:true},
    {id:5,name:"Advanced metrics",basic:false,pro:false,business:true},
    {id:6,name:"Photo downloads",basic:false,pro:false,business:true},
    {id:7,name:"Search engine indexing",basic:false,pro:false,business:true},
    {id:8,name:"Custom analytics",basic:false,pro:false,business:true},
  ]
  const compareRef = useRef();
  const {inView} = useObserver(compareRef);
  return (
    <div className="compare-parent">
        <div ref={compareRef} className="desktop-tablet">
            <h1 className="uppercase compare-table-title">Compare</h1>
            <CompareTable features={features} checkIcon={checkSvg} inView={inView}/>
        </div>
        <div className="mobile w-full">
        <MobileCompare features={features} checkIcon={checkSvg}/>
        </div>
    </div>
  )
}

export default Compare