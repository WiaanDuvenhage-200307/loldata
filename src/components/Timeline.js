import './Timeline.css'
import TimeChart from './charts/TimeChart';

const Timeline = () => {
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
                <h2>TIMELINE</h2>
                <br/>
                <p>Here is a timeline for when all the major tournaments are held throughout the year!</p>
            </div>

            <div className='time-block pie'>
                <h2>Tournaments</h2>
                
                <TimeChart/>
            </div>
        </>
    )
}

export default Timeline;