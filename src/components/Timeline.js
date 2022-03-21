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
                <p>Want to know the timeline of your favourite Esports team or when tournaments are held? Take a look here!</p>
            </div>

            <div className='graph-block pie'>
                <h2>Tournaments</h2>
                
                <TimeChart/>
            </div>
        </>
    )
}

export default Timeline;