import React from 'react';
import './Compare.css';
import axios from 'axios';
import "https://kit.fontawesome.com/3d7d8906d0.js";
import {useEffect, useState, useRef} from 'react';
import RadarChart from '../components/charts/RadarChart';

const Compare = () => {

    const[getData, setGetData] = useState();
    // const[allChampions, setAllChampions] = useState();
    const [showChampion, setShowChampion] = useState();
    const [championTitle, setChampionTitle] = useState();

    const [showChampionTwo, setShowChampionTwo] = useState();
    const [championTitleTwo, setChampionTitleTwo] = useState();

    const [radarData, setRadarData] = useState([]);

    const champPeep = useRef();
    const champPeepTwo = useRef();


    useEffect(() => {
        axios.get('https://api.sportsdata.io/v3/lol/stats/json/Champions?key=94c287b249d74701adf60e03aa398884')
        .then((res) => {
            setGetData(res.data)

            let allNames = getData.map((item) => item.Name); //|| To get champion info to display on below card and populate chart

            // setAllChampions(allNames);
        })
    }, [])

    const getChampion = () => {
        
    
        for(let i = 0; i < getData.length; i++){
            let individualChamp = champPeep.current.value;
            if(getData[i].Name === individualChamp){
                // console.log(getData[i]);
                
                setShowChampion(individualChamp);
                setChampionTitle(getData[i].Title);

                let hitPoints = getData[i].Hp
                let attack = getData[i].Attack;
                let defense = getData[i].Defense;
                let attackRange = getData[i].AttackRange;
                let armor = getData[i].Armor;

                setRadarData([hitPoints, attack, defense, attackRange, armor]);
                console.log(radarData) //returns empty array don't know why
            }

        } //! Have to click search twice to update array to new array

    } //Get Champion name and check to see if it is found in the API

    const getSecondChampion = () => {
        let individualChampTwo = champPeepTwo.current.value;
        console.log(individualChampTwo);

        for(let i = 0; i < getData.length; i++){
            if(getData[i].Name === individualChampTwo){
                // console.log(getData[i]);
                setShowChampionTwo(individualChampTwo);
                setChampionTitleTwo(getData[i].Title);
            }
        }
    } //Get Champion name and check to see if it is found in the API

    const chart = {
        labels: ["HP", "Attack", "Defense", "Attack Range", "Armor"],
        datasets: [{
            label: 'player amount per role',
            data: {radarData},
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
                        <input ref={champPeep} type="search" id='champion-search' placeholder='e.g Annie' />
                    </div>
                    <button onClick={getChampion} className='btn-prim'>Search</button>
                </div>

                <div className='championNames'>
                    <ul>
                        {/* <li>{allChampions}</li> */}
                    </ul>
                </div>

            </div>

            

            <div className='search-block'>

                {/* Would use this for compare page! */}
                <div>

                    <div className='search'>
                        <input ref={champPeepTwo} type="search" id='champion-search' placeholder='e.g Annie'/>
                    </div>
                    <button onClick={getSecondChampion} className='btn-prim'>Search</button>
                </div>

            </div>

            <div className='result'>

            <div className='graph-block'> 
                <h3>{showChampion}</h3>
                <h4>{championTitle}</h4>
                <RadarChart data={chart}/>
            </div>

            <div className='graph-block'> 
                <h3>{showChampionTwo}</h3>
                <h4>{championTitleTwo}</h4>
                <RadarChart/>
            </div>

            </div>

        </>
    )
}

export default Compare;