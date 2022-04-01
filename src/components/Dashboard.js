import './Dashboard.css';
import axios from 'axios';
import PieChart from './charts/DoughnutChart';
import BarChart from '../components/charts/BarChart';


// ! Players API Call | get all players roles and make Pie Chart
// axios.get('https://api.sportsdata.io/v3/lol/scores/json/Players?key=94c287b249d74701adf60e03aa398884')
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// })


// ! Players with active memberships with teams.
// axios.get('https://api.sportsdata.io/v3/lol/scores/json/ActiveMemberships?key=94c287b249d74701adf60e03aa398884')
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// })



const Dashboard = () => {

    
    
    return(

    <>
        <div className='intro'>
            <h2>Dashboard</h2>
            <h3>Analyze.Compare.Watch</h3>
            <p className='more-info'>Keep track of League of Legends Esports Players and tournaments & compare champions statistics!</p>
            <br/>
        </div>

        
        {/* Turn into pie chart */}
        <div className='graph-block pie'>
            <h2>Players per Role</h2>
            
            <PieChart/>
        </div>

        {/* MAKE BAR CHART */}
        <div className='graph-block'>

            <h2>Active Players</h2>
            <BarChart/>
        </div>

        <div className='graph-block'>

            <h2>Player Stats</h2>

            <BarChart/>

        </div>
    </>
    )
    
}

export default Dashboard;