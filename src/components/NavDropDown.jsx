import { Link } from 'react-router-dom'
import "./NavDropDown.css"

const NavDropDown = () => {
    
    
    return (
        <div className="nav-drop-down-container">
            <div className="drop-down-container">
                <Link className="drop-down-link" to='/'>
                    <h3>Start</h3>
                </Link>
                <Link className="drop-down-link" to='/'>
                    <h3>Tutorial</h3>
                </Link>
                <Link className="drop-down-link" to='/'>
                    <h3>Keyboard</h3>
                </Link>
                <Link className="drop-down-link" to='/'>
                    <h3>Multiple Choice</h3>
                </Link>
                <Link className="drop-down-link" to='/'>
                    <h3>Would You Rather?</h3>
                </Link>
            </div>
            <button className="nav-button">
                <div className="nav-button-bar"></div>
                <div className="nav-button-bar"></div>
                <div className="nav-button-bar"></div>
            </button>
        </div>
    )
}

export default NavDropDown