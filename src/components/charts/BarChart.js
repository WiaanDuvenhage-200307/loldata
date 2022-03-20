import React from "react";
import 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import axios from 'axios';
import './BarChart.css'

// ! Make Pie Chart from all players roles
axios.get('https://api.sportsdata.io/v3/lol/scores/json/Players?key=94c287b249d74701adf60e03aa398884')
.then((res) =>{
    console.log(res);
})
.catch((err) =>{
    console.log(err);
})

const BarChart = () =>{
    return(
        <div className="exCon chart">
            <Bar data={{
                labels: ['Top', 'Jungle', 'Mid', 'ADC', 'Support'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: [
                        '#A379C9',
                        '#F7F7F9',
                        '#FBFF12',
                        '#131B23',
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
                    borderWidth: 0
                }]}}
                height = {400}
                width = {400}
                options={{maintainAspectRatio: false}}
            
            />
        </div>
    )
}

export default BarChart;