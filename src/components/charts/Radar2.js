import React from "react";
import { Radar } from "react-chartjs-2";
import 'chart.js/auto';
import axios from 'axios';
import './RadarChart.css'

const Radar2 = () => {
    return(
        <div className="exCon chart">
            <Radar data={{
                labels: ['HP', 'Attack', 'Defense', 'Attack Range', 'Armor'],

                datasets: [{
                    label: 'Statistic',
                    data: [100, 34, 5, 80, 5],
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.5)'
                    ],
                    borderColor: [
                        'rgb(163, 121, 201)',
                    ],
                    borderWidth: 2,
                }],
            }}
                height = {400}
                width = {400}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                       r: {
                           angleLines: {
                               color: 'white'
                           },
                           grid: {
                               color: 'white'
                           },
                           pointLabels:{
                                color: '#A379C9',
                                font: 'bold'
                           },
                           ticks: {
                               color: 'white', 
                           } 
                       }
                    }
                }}
            
            />
        </div>
    )
}

export default Radar2;