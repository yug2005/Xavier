import { Link } from 'react-router-dom'
import Keyboard from "./Keyboard"
import logo from "../../images/neurotech-logo.png"
import "./Main.css"

const Main = () => {
    return (
        <div className='main-container'>
            <header className='header' >
                <Link className="home-link" to='/'>
                    <img src={logo} alt="logo" />
                    <div>
                        <p className='neurotech-link'>neurotech</p>
                        <p className='uoft-link'>uoft</p>  
                    </div>
                </Link>
            </header>
            <Keyboard />
        </div>
    )
}

export default Main 