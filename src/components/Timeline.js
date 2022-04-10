import './Timeline.css'
import TimeChart from './charts/TimeChart';

const Timeline = () => {
    return(
        <>
            <div className='intro'>
                <h2>Timeline</h2>
                <br/>
                <p>Here is a timeline for when all the major tournaments are held throughout the year!</p>
            </div>
            <div className='time-block'>
                <h2>Teams</h2>
                <h3>Select a Team Please</h3>
                
                <TimeChart/>
            </div>
        </>
    )
}

export default Timeline;