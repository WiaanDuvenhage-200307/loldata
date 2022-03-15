import './Compare.css';
import axios from 'axios';

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
                <h2>COMPARE</h2>
                <br/>
                <p>Want to know what Champion is the best? Compare them here</p>
            </div>

            
            <div className='graph-block'>

            <h2>Block</h2>

            </div>

        </>
    )
}

export default Compare;