import React from 'react'
import "./CompareTable.css"

const CompareTable = ({features,checkIcon,inView}) => {
  return (
    <table className="compare-table">
    <thead>
      <tr className="thead-row">
        <th className="table-header">The Features</th>
        <th className="table-header">Basic</th>
        <th className="table-header">Pro</th>
        <th className="table-header">Business</th>
      </tr>
    </thead>
    <tbody>
{features.map(feature=>(
<tr style={{"--i":`${feature.id/2}s`}} className={`td-row ${inView ? 'soft-slide-left' : 'off-left'}`} key={feature.id}>
<td className="table-data">{feature.name}</td>
<td style={{"--i":`${feature.id}s`}} className={`table-data text-center ${inView ? 'clear-focus' : 'blur-element'}`}>{feature.basic && <img src={checkIcon} alt="check"/>}</td>
<td style={{"--i":`${feature.id}s`}} className={`table-data text-center ${inView ? 'clear-focus' : 'blur-element'}`}>{feature.pro && <img src={checkIcon} alt="check"/>}</td>
<td style={{"--i":`${feature.id}s`}} className={`table-data text-center ${inView ? 'clear-focus' : 'blur-element'}`}>{feature.business && <img src={checkIcon} alt="check"/>}</td>
</tr>
))}
    </tbody>
  </table>
  )
}

export default CompareTable