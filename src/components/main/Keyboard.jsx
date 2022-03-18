import { useState, useEffect } from 'react'
import Key from './Key'
import "./Keyboard.css"

import { IoIosBackspace } from 'react-icons/io'
import { IoEnter } from 'react-icons/io5'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { BsFillKeyboardFill } from 'react-icons/bs'
import { RiSpace } from 'react-icons/ri'

const Keyboard = ({ onKeyClick, onBackspace, onSpace }) => {
    
    const keys = [['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
                  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?']]

    const [enableEmoji, setEnableEmoji] = useState(false)
    const emojis = [['😀', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉'],
                    ['❤️', '🥰', '😍', '😘', '😚', '🤩', '😎', '😛', '😜', '😝'],
                    ['🤗', '🤭', '🫢', '🤫', '🤔', '🤨', '😐', '😑', '😒', '😏'],
                    ['🔥', '🤯', '😮', '😨', '😱', '😭', '😔', '👍', '👎', '🙏']]              
    
    const [keyCount, setKeyCount] = useState([
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
    ])

    const [enableFlash, setEnableFlash] = useState(false)
    const [currentFlash, setCurrentFlash] = useState({
        row: -1, 
        col: -1
    })
    
    const [timer, setTimer] = useState({
        time: 0, 
        started: true, 
        finished: false
    })

    useEffect(() => {
        let interval = null
        if (timer.finished) {
            clearInterval(interval)
        } 
        else {        
            if (timer.started) {
                interval = setInterval(() => {
                    // setTimer({...timer, time: timer.time + 0.033})
                    if (enableFlash) getRandomFlash()
                }, 16)
            }
        }
        return () => clearInterval(interval)
    }, [timer]) 

    const getKeyboard = () => {
        return <div className='keyboard-container'>
            {enableEmoji ? 
            emojis.map((keyrow, row) => (<div className='row-container'>
                {keyrow.map((key, col) => (<Key onKeyClick={onKeyClick} letter={key}></Key>))}
            </div>)) :
            keys.map((keyrow, row) => (<div className='row-container'>
                {keyrow.map((key, col) => (<Key onKeyClick={onKeyClick} letter={key}></Key>))}
            </div>))}
        </div>
    }

    const showOverlay = () => {
        return <div className='overlay-container'>
            {keyCount.map((value, row) => (
                <div className='row-container'>
                    {value.map((key, col) => ((row === currentFlash.row || col === currentFlash.col) ? 
                        <div className='overlay-box'></div> :
                        <div className='transparent-box'></div>
                    ))}
                </div>
            ))}
        </div>
    }

    const getRandomFlash = () => {
        // random number for row (0 - 3)
        const row = Math.floor(Math.random() * 4)
        // random number for column (0 - 10) 
        const col = Math.floor(Math.random() * 11)
        // set the current flash row and column
        setCurrentFlash({row: row, col: col})
    }

    return (
        <div className="keyboard">
            {getKeyboard()}
            <div className='column-container'>
                <div className="emoji-container" onClick={()=>{setEnableEmoji(!enableEmoji)}}>
                    <span>{enableEmoji ? <BsFillKeyboardFill /> : <BsEmojiSmileFill />}</span>
                </div>
                <div className='space-container' onClick={onSpace}>
                    <span><RiSpace /></span>
                </div>
                <div className='backspace-container' onClick={onBackspace}>
                    <span><IoIosBackspace /></span>
                </div>
                <div className='enter-container'>
                    <span><IoEnter /></span>
                </div>
            </div>
            {/* {showOverlay()} */}
        </div>
    )
}

export default Keyboard