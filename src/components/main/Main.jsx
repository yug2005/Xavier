import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Keyboard from "./Keyboard"
import logo from "../../images/neurotech-logo.png"
import "./Main.css"

import { HiOutlineSearch } from 'react-icons/hi'

const Main = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        document.getElementById("place-holder-input").focus()
    }, [])

    const addChar = (e) => {
        setText(text + e)
    }

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
            <div className='text-display' >
                <span></span>
                <div className={text == '' ? 'text-empty-box' : 'text-box'}>{text == '' ? 'Type Something ... ' : text}</div>
                <span className='search-icon' ><HiOutlineSearch /></span>
            </div>
            <Keyboard />
            <input id="place-holder-input" value={text} placeholder='Type something' type='text' onChange={(e) => {setText(e.target.value)}}></input>
        </div>
    )
}

export default Main 

