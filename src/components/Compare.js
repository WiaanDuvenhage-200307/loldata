import React from 'react';
import './Compare.css';
import axios from 'axios';
import "https://kit.fontawesome.com/3d7d8906d0.js";
import RadarChart from '../components/charts/RadarChart';
import Radar2 from '../components/charts/Radar2';
import {useEffect, useState, useRef} from 'react';

const Compare = () => {
    
    useEffect(() => {
        axios.get('https://api.sportsdata.io/v3/lol/stats/json/Champions?key=94c287b249d74701adf60e03aa398884')
        .then((res) => {
            let data = res.data;
            console.log(data)
        })
    })


    return(
        <>

            <div className='intro'>
                <h2>Compare</h2>
                <h3>Who is the strongest?<br/></h3>
                <p>Compare champions on their <strong>HP</strong>, <strong>Mana</strong>, <strong>Armor</strong>, <strong>Attack</strong> & <strong>Defense</strong>. </p>
            </div>
            
            <div className='search-block'>

                {/* Would use this for compare page! */}
                <div>
                    <div className='search'>
                        <input type="search" id='champion-search' placeholder='e.g Annie'/>
                    </div>
                    <button className='btn-prim'>Search</button>
                </div>

            </div>

            

            <div className='search-block'>

                {/* Would use this for compare page! */}
                <div>

                    <div className='search'>
                        <input type="search" id='champion-search' placeholder='e.g Annie'/>
                    </div>
                    <button className='btn-prim'>Search</button>
                </div>

            </div>

            <div className='result'>

                <div className='graph-block'> 
                    <h3>ANNIE</h3>
                    <img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg' width="50%"/>
                    <RadarChart/>
                </div>


                <div className='graph-block'>
                    <h3>AATROX</h3>
                    <img src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_GB/5b922bef08881410f8fffa7273c30a75dfb1d11f/assets/downloads/wallpapers/aatrox-1920x1080.jpg' width="50%"/>
                    <Radar2/>
                </div>

            </div>

        </>
    )
}

export default Compare;