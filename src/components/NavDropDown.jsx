import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavDropDown.css"

// icon imports
import { TiHome } from 'react-icons/ti'
import { IoHelpCircle } from 'react-icons/io5'
import { BsKeyboardFill } from "react-icons/bs"
import { BsListTask } from "react-icons/bs"
import { BsUiRadios } from "react-icons/bs"
import { HiOutlineMenu } from "react-icons/hi"
import { HiChevronLeft } from "react-icons/hi"
import { HiChevronRight } from 'react-icons/hi'


const NavDropDown = () => {
    
    const [open, setOpen] = useState(false); 

    return (
        <div className="nav-drop-down-container">
            {open && <div className="drop-down-container">
                <DropDownItem text='Start' icon={<TiHome />} link='/' onClick={() => setOpen(false)}/>
                <DropDownItem text='Tutorial' icon={<IoHelpCircle />} link='/tutorial' onClick={() => setOpen(false)}/>
                <DropDownItem text="Keyboard" icon={<BsKeyboardFill />} link='/keyboard' onClick={() => setOpen(false)}/>
                <DropDownItem text="Would You Rather?" icon={<BsUiRadios />} link='/wouldyourather' onClick={() => setOpen(false)}/>
                <DropDownItem text="Multiple Choice" icon={<BsListTask />} link='/multiplechoice' onClick={() => setOpen(false)}/>
            </div>}
            <NavDropDownButton open={open} onClick={() => setOpen(!open)}/>
        </div>
    )
}

const NavDropDownButton = ({open, onClick}) => {
    return (
        <button onClick={onClick} className="nav-button">
            {!open ? <>
                <HiOutlineMenu className='nav-button-default' />
                <HiChevronLeft className='nav-button-left' />
            </> : 
            <HiChevronRight />}
            
            
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