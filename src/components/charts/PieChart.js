import React from "react";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import axios from 'axios';
import './PieChart.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useState, useEffect, useRef} from 'react';


ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () =>{

    const [pieChartInfo, setPieChartInfo] = useState([]);

   useEffect(()=>{
        axios.get("https://api.sportsdata.io/v3/lol/scores/json/Players?key=94c287b249d74701adf60e03aa398884")
        .then((res)=>{
            let data = res.data;

            let topLaners = data.filter((item)=> item.Position === "Top").length;
            let junglers = data.filter((item)=> item.Position === "Jungle").length;
            let midLaners = data.filter((item)=> item.Position === "Mid").length;
            let bottomLaners = data.filter((item)=> item.Position === "ADC").length;
            let supports = data.filter((item)=> item.Position === "Support").length;

            setPieChartInfo([topLaners, junglers, midLaners, bottomLaners, supports]);
        })
    }, [])

    console.log(pieChartInfo);

    const chart = {
        labels: ["Top", "Jungle", "Mid", "ADC", "Support"],
        datasets: [{
            label: 'player amount per role',
            data: pieChartInfo,
            backgroundColor: [
                '#A379C9',
                '#F7F7F9',
                '#FBFF12',
                '#131B23',
                '#134074'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 0
        }]
        
    }

    return(
        <div className="exCon chart">
            <Pie data={chart}/>
        </div>
    )
}

export default PieChart;