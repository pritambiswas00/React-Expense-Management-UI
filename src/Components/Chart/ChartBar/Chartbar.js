import React from 'react'
import './Chartbar.css'

function Chartbar(props) {
    let barHeight = '0%';

    if(props.maxValue > 0 ){
      barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
      console.log(barHeight)
    }
    return (
        <div className="chart-bar">
          <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{height: barHeight}}></div>
          </div>  
          <label className="chart-bar__label">{props.label}</label>
        </div>
    )
}

export default Chartbar
