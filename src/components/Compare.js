import React from 'react';
import './Compare.css';
import axios from 'axios';
import "https://kit.fontawesome.com/3d7d8906d0.js";
import RadarChart from '../components/charts/RadarChart';
import Radar2 from '../components/charts/Radar2';

// ! Champions API Call
axios.get('https://api.sportsdata.io/v3/lol/stats/json/Champions?key=94c287b249d74701adf60e03aa398884')
.then((res) =>{
    console.log(res);
})
.catch((err) =>{
    console.log(err);
})

const Compare = () => {
    return(
        <>

            <div className='about'>
            <p>About LOLDATA</p>
            <p>About the API</p>
            </div>

            <div className='search'>
                <p>Search...</p>
            </div>

            <div className='intro'>
                <h1>COMPARE</h1>
                <br/>
                <h3>Compare Champions with each other. <br/>
                They will be compared on their <strong>HP</strong>, <strong>Mana</strong>, <strong>Armor</strong>, <strong>Attack</strong> & <strong>Defense</strong>. </h3>
            </div>

            <h2>Choose your champion</h2>
            <div className='compare-block'>

                {/* Would use this for compare page! */}
                <div className="exCon">
                    <h4>The Champion has selected: Champion</h4>
                    <select>
                        <option>Annie</option>
                        <option>Aatrox</option>
                        <option>Alistar</option>
                    </select>
                </div>

            </div>

            <div className='compare-block'>


                {/* Would use this for compare page! */}
                <div className="exCon">
                    <h4>The Champion has selected: Champion</h4>
                    <select>
                        <option>Option One</option>
                        <option>Option Two</option>
                        <option>Option Three</option>
                    </select>
                </div>

                

            </div>

            <div className='result'>

                <div className='output'> 
                    <h3>Champion Name</h3>
                    <img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg'/>
                    <RadarChart/>
                </div>

                <h2>VS</h2>

                <div className='output'>
                    <h3>Champion 2</h3>
                    <img src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_GB/5b922bef08881410f8fffa7273c30a75dfb1d11f/assets/downloads/wallpapers/aatrox-1920x1080.jpg'/>
                    <Radar2/>
                </div>

            </div>

        </>
    )
}

export default Compare;