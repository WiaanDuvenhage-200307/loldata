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
                <h2>Tournaments</h2>
                
                <TimeChart/>
            </div>

            <div className='info'>
                <h2>More Info</h2>
                <ol>
                    <li><b>LCS</b> - North American Championships</li>
                    <li>|</li>
                    <li><b>LEC</b>  - European Championships</li>
                    <li>|</li>
                    <li><b>LPL</b>  - Chinese Championships</li>
                    <li>|</li>
                    <li><b>LCK</b>  - Korean Championships</li>
                    <li>|</li>
                    <li><b>MSI</b>  - Mid-Season Invitational</li>
                    <li>|</li>
                    <li><b>Worlds</b>  - The World Championship</li>
                </ol>
            </div>
        </>
    )
}

export default Timeline;