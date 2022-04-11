import './Dashboard.css';
import axios from 'axios';
import PieChart from './charts/DoughnutChart';
import Polar from './charts/Polar';
import { useEffect, useState } from 'react';
import image from '../components/assets/2833617__1_-removebg-preview.png';



const Dashboard = () => {

    const [data, setData] = useState([]);

    
    
    return(

    <>
        <div className='intro'>
            <h2>Greetings, Summoner</h2>
            <div className='welcomeMsg'>
                <h3>Welcome to LOLDATA</h3>
                <p className='more-info'>Keep track of your favourite Esport pro's and compare champions to determine the best of the best!</p> 
                <img className='image' src={image}/>
            </div>

        </div>

        {/* Turn into pie chart */}
        <div className='graph-block pie'>
            <h2>Players per Role</h2>
            
            <PieChart/>
        </div>

        {/* MAKE BAR CHART */}
        <div className='graph-block polar'>

            <h2>Players Nationality</h2>
            <Polar/>
        </div>

        <div className='graph-block total-players'>
            <h3>Player Statistics</h3>


        </div>

        
    </>
    )
    
}

export default Dashboard;