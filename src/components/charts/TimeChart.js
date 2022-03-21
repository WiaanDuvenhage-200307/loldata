import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
import axios from 'axios';
import './TimeChart.css'
import 'chartjs-adapter-date-fns';

const TimeChart = () =>{
    return(
        <div className="exCon chart">
            <Bar data={{
                labels: ['LCS', 'LEC', 'LPL', 'LCK', 'MSI', 'Worlds'],
                datasets: [{
                    label: 'Tournaments',
                    data: [
                        ['2022-02-05', '2022-04-25'],
                        ['2022-01-12', '2022-03-25'],
                        ['2022-02-06', '2022-02-09'],
                        ['2022-02-09', '2022-02-13'],
                        ['2022-02-13', '2022-02-15'],
                        ['2022-02-15', '2022-02-17']
                    ],
                    backgroundColor: [
                        '#A379C9',
                        '#F7F7F9',
                        '#FBFF12',
                        '#131B23',
                        '#134074',
                        '#134074'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    barPercentage: 0.2
                }]}}
                height = {400}
                width = {400}
                options={{
                    maintainAspectRatio: false,
                    indexAxis : 'y',
                    scales: {
                        x: {
                            min: '2022-02-01',
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
    )

}

export default TimeChart;