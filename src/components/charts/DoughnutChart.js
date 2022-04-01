import React from "react";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import axios from 'axios';
import './DoughnutChart.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useState, useEffect, useRef} from 'react';


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () =>{

    const [doughnutChartInfo, setDoughnutChartInfo] = useState([]);

   useEffect(()=>{
        axios.get("https://api.sportsdata.io/v3/lol/scores/json/Players?key=94c287b249d74701adf60e03aa398884")
        .then((res)=>{
            let data = res.data;

            let topLaners = data.filter((item)=> item.Position === "Top").length;
            let junglers = data.filter((item)=> item.Position === "Jungle").length;
            let midLaners = data.filter((item)=> item.Position === "Mid").length;
            let bottomLaners = data.filter((item)=> item.Position === "ADC").length;
            let supports = data.filter((item)=> item.Position === "Support").length;

            setDoughnutChartInfo([topLaners, junglers, midLaners, bottomLaners, supports]);
        })
    }, [])

    console.log(doughnutChartInfo);

    const chart = {
        labels: ["Top", "Jungle", "Mid", "ADC", "Support"],
        datasets: [{
            label: 'player amount per role',
            data: doughnutChartInfo,
            backgroundColor: [
                '#5233FB',
                '#D5BEC6',
                '#ECECEC',
                '#E2C1A2',
                '#4D4D55'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 0
        }],
        height: [30],
        options:{
            maintainAspectRatio: false
        }
        
    }

    return(
        <div className="exCon doughnutChart">
            <Doughnut data={chart}/>
        </div>
    )
}

export default DoughnutChart;