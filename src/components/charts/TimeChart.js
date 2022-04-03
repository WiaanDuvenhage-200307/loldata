import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
import axios from 'axios';
import './TimeChart.css'
import 'chartjs-adapter-date-fns';

const TimeChart = () =>{
    return(
        <div className="timeChart">
            <div className="exCon chart">
                <Bar data={{
                    labels: ['LCS', 'LEC', 'LPL', 'LCK', 'MSI', 'Worlds'],
                    datasets: [{
                        label: ['Tournament Duration'],
                        data: [
                            ['2022-02-05', '2022-04-25'],
                            ['2022-01-12', '2022-03-25'],
                            ['2022-01-06', '2022-04-09'],
                            ['2022-01-12', '2022-04-02'],
                            ['2022-05-06', '2022-05-23'],
                            ['2022-10-15', '2022-11-25']
                        ],
                        backgroundColor: [
                            '#5233FB',
                            '#D5BEC6',
                            '#ECECEC',
                            '#E2C1A2',
                            '#4D4D55'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        barPercentage: 0.5
                    }]}}
                    options={{
                        maintainAspectRatio: false,
                        indexAxis : 'y',
                        scales: {
                            x: {
                                min: '2022-01-01',
                                max: '2022-12-31',
                                type: 'time',
                                time: {
                                    unit: 'day'
                                }
                            },
                            y: {
                                beginAtZero: true
                            }
                        }
                    }}
                
                />
            </div>
        </div>
    )

}

export default TimeChart;