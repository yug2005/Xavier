import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavDropDown.css"

// icon imports
import { TiHome } from 'react-icons/ti'
import { IoHelpCircle } from 'react-icons/io5'
import { BsKeyboardFill } from "react-icons/bs"
import { BsListTask } from "react-icons/bs"
import { BsUiRadios } from "react-icons/bs"


const NavDropDown = () => {
    
    const [open, setOpen] = useState(false); 

    return (
        <div className="nav-drop-down-container">
            {open && <div className="drop-down-container">
                <DropDownItem text='Start' icon={<TiHome />} link='/' onClick={() => setOpen(false)}/>
                <DropDownItem text='Tutorial' icon={<IoHelpCircle />} link='/tutorial' onClick={() => setOpen(false)}/>
                <DropDownItem text="Keyboard" icon={<BsKeyboardFill />} link='/keyboard' onClick={() => setOpen(false)}/>
                <DropDownItem text="Would You Rather?" icon={<BsUiRadios />} link='/wouldyourather' onClick={() => setOpen(false)}/>
                <DropDownItem text="Multiple Choice" icon={<BsListTask />} link='/multiplechioce' onClick={() => setOpen(false)}/>
            </div>}
            <NavDropDownButton onClick={() => setOpen(!open)}/>
        </div>
    )
}

const NavDropDownButton = ({onClick}) => {
    return (
        <button onClick={onClick} className="nav-button">
            <div className="nav-button-bar"></div>
            <div className="nav-button-bar"></div>
            <div className="nav-button-bar"></div>
        </button>
    )
}

const DropDownItem = ({ text, icon, link, onClick }) => {
    return (
        <Link onClick={onClick} className="drop-down-item" to={link}>
            <h3>{text}</h3>
            <span>{icon}</span>
        </Link>
    )
}

export default NavDropDown