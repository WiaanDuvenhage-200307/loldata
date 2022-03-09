import './Nav.css';

const Nav = () => {
    return(
        <nav>
            <h1>LOLDATA</h1>
            <ul>
                <a href='/'><li>Dashboard</li></a>
                <a href='/Compare'><li>Compare</li></a>
                <a href='/Timeline'><li>Timeline</li></a>
                
            </ul>
        </nav>
    )
}

export default Nav;