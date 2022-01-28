import { Link } from 'react-router-dom'
import logo from '../../images/neurotech-logo.png'
import "./Start.css"

const Start = () => {

    return (
        <div className='start-container'>
            {/* <div className='background-image' >
                <img src="./background-image.jpg" alt='logo' />
            </div> */}
            <div className='introduction-container'>
                <div className='start-title'>
                    <h3>Mind Type</h3>
                </div>
                <div className="description-container">
                    <h4>A BCI-Controlled Virtual Keyboard</h4>
                </div>
                <Link className='start-button button' to="/keyboard">
                    Start
                </Link>
            </div>
            <div className='main-logo'>
                <img src={logo}  />
                <div className="neurotech-title">
                    <p className='neurotech'>neurotech</p>
                    <p className='uoft'>uoft</p>  
                </div>
            </div>
        </div>
    )
}

export default Start 