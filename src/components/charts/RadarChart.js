import React from "react";
import { Radar } from "react-chartjs-2";
import 'chart.js/auto';
import axios from 'axios';
import './RadarChart.css'

const RadarChart = () => {
    return(
        <div className="exCon chart">
            <Radar data={{
                labels: ['HP', 'Attack', 'Defense', 'Attack Range', 'Armor'],
                datasets: [{
                    label: 'Statistic',
                    data: [250, 56, 11, 75, 2],
                    backgroundColor: [
                        'rgba(163, 121, 201, 0.5)'
                    ],
                    borderColor: [
                        'rgb(163, 121, 201)',
                    ],
                    borderWidth: 2
                }]}}
                height = {400}
                width = {400}
                options={{maintainAspectRatio: false}}
            
            />
        </div>
    )
}

export default RadarChart;