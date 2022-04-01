import React from 'react';
import './Compare.css';
import axios from 'axios';
import "https://kit.fontawesome.com/3d7d8906d0.js";
import {useEffect, useState, useRef} from 'react';
import CompareCard from './CompareCard';

const Compare = () => {

    const[getData, setGetData] = useState([]);
    const[allChampions, setAllChampions] = useState();

    const champPeep = useRef();
    const champPeepTwo = useRef();


    useEffect(() => {
        axios.get('https://api.sportsdata.io/v3/lol/stats/json/Champions?key=94c287b249d74701adf60e03aa398884')
        .then((res) => {
            setGetData(res.data)

            let allNames = getData.map((item) => item.Name); //|| To get champion info to display on below card and populate chart

            setAllChampions(allNames);
        })
    }, [])

    const getChampion = () => {
        let individualChamp = champPeep.current.value;
        console.log(individualChamp);

        

        for(let i = 0; i < getData.length; i++){
            if(getData[i].Name === individualChamp){
                console.log("True");
            }
    } //! Can't I just create a prop inside of this and populate the card considering I'm running an if() statement to check if it matches?
    } //Get Champion name and check to see if it is found in the API

    const getSecondChampion = () => {
        let individualChampTwo = champPeepTwo.current.value;
        console.log(individualChampTwo);

        for(let i = 0; i < getData.length; i++){
            if(getData[i].Name === individualChampTwo){
                console.log("True")
            }
        }
    } //Get Champion name and check to see if it is found in the API

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
                        <input ref={champPeep} type="search" id='champion-search' placeholder='e.g Annie'/>
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

            <CompareCard/>

            <CompareCard />

            </div>

        </>
    )
}

export default Compare;