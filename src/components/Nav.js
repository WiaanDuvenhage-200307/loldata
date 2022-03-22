import './Nav.css';
import "https://kit.fontawesome.com/3d7d8906d0.js";
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <h1>LOLDATA</h1>
            <ul>
                <Link to="/"><li className='dashboard'><i class="fa-solid fa-gauge"></i>Dashboard</li></Link>
                <Link to="Compare"><li className='compare'><i class="fa-solid fa-scale-balanced"></i>Compare</li></Link>
                <Link to="Timeline"><li className='timeline'><i class="fa-solid fa-timeline"></i>Timeline</li></Link>
                
            </ul>
        </nav>
    )
}

export default Nav;