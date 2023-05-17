import {NavLink} from 'react-router-dom';


export function Header(){
    return (
        <nav>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/spam" className="nav-link">Spam</NavLink>
            <NavLink to="/trash" className="nav-link">Trash</NavLink>
        </nav>
    )
}