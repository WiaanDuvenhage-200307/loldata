import './Nav.css';
import "https://kit.fontawesome.com/3d7d8906d0.js";

const Nav = () => {
    return(
        <nav>
            <h1>LOLDATA</h1>
            <ul>
                <a href='/'><li className='dashboard'><i class="fa-solid fa-gauge"></i>Dashboard</li></a>
                <a href='/Compare'><li className='compare'><i class="fa-solid fa-scale-balanced"></i>Compare</li></a>
                <a href='/Timeline'><li className='timeline'><i class="fa-solid fa-timeline"></i>Timeline</li></a>
                
            </ul>
        </nav>
    )
}

export default Nav;