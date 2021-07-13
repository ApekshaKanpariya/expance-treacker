import React from 'react';
import CharBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    const dataPontValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPontValues);

    return <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
            <CharBar 
            key={dataPoint.label}
            value={dataPoint.value}
             maxValue={totalMaximum} 
             label={dataPoint.label}
              />
              ))}
        </div>
};

export default Chart;