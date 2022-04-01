import React from 'react';
import RadarChart from '../components/charts/RadarChart';

const CompareCard = (props) => {
    return (
            
            <div className='graph-block'> 
                    <h3>{props.name}</h3>
                    <RadarChart/>
                </div>
    );
};

export default CompareCard;