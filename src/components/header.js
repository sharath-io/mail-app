import {NavLink} from 'react-router-dom';


export function Header(){
    const getActiveStyle =({isActive}) =>({
        color: isActive ? "red" :'',
        fontSize: isActive ? "30px" : ''
    })
    return (
        <div>
            <h1>sharath's mail box</h1>
            <nav>
              <NavLink to="/" className="nav-link" style={getActiveStyle}>Home</NavLink>
              <NavLink to="/spam" className="nav-link" style={getActiveStyle}>Spam</NavLink>
              <NavLink to="/trash" className="nav-link" style={getActiveStyle}>Trash</NavLink>
            </nav>
        </div>
        
    )
}