import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
import axios from 'axios';
import './TimeChart.css'
import {useState, useEffect, useRef} from 'react';
import 'chartjs-adapter-date-fns';

// TODO: Get teams from all over the world and append dynamically to dropdown.
// TODO: When clicking on team from dropdown run function to populate chart with its players.
// TODO: Change player real names to IGN using another axios request.
// TODO: Add additional data below chart to contextualise data on chart, e.g, area of team: Australia, and if team is active.
// https://api.sportsdata.io/v3/lol/scores/json/Players?key=94c287b249d74701adf60e03aa398884 TO GET PLAYER IGN 
// https://api.sportsdata.io/v3/lol/scores/json/ActiveMemberships?key=94c287b249d74701adf60e03aa398884 TO GET TEAMS

const TimeChart = () =>{
    
    useEffect(() =>{
        axios.get("https://api.sportsdata.io/v3/lol/scores/json/ActiveMemberships?key=94c287b249d74701adf60e03aa398884")
        .then((res) =>{
            let data = res.data;
            console.log(data);
            // setTournament(data.filter(({ Name }) => ["NA LCS", "LEC", "LPL", "LCK", "Mid-Season Invitational", "World Championship"].includes(Name)).map(({ Name }) => Name));
            // console.log(tournament);

            // Get Dates of all tournaments
 
        })
    },[])
    return(
        <>
        <div className="drop-down">
            <select>
                <option>Please Select...</option>
            </select>
        </div>
        <div className="timeChart">
            
            <div className="exCon chart">
                <Bar data={{
                    labels: ["player one", "player two", "player three", "player four"],
                    datasets: [{
                        label: ['Player has been Active'],
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
                            '#775FFC',
                            '#664BFB',
                            '#4323FB',
                            '#3310F9'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        barPercentage: 1
                    }]}}
                    options={{
                        maintainAspectRatio: false,
                        indexAxis : 'y',
                        scales: {
                            x: {
                                min: '2015-01-01',
                                max: '2022-12-31',
                                type: 'time',
                                time: {
                                    unit: 'year'
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
        </>
    )

}

export default TimeChart;