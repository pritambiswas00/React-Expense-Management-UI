import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar/Chartbar'

function Chart(props) {

    const totalMax = Math.max(...(props.dataPoints.map(data => data.value)));
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                 key={dataPoint.label}
                 value={dataPoint.value}
                 maxValue={totalMax}
                 label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart
