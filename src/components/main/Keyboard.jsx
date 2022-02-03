import Key from './Key'
import "./Keyboard.css"

import { IoIosBackspace } from 'react-icons/io'
import { IoEnter } from 'react-icons/io5'
import { BsEmojiSmile } from 'react-icons/bs'

const Keyboard = () => {
    return (
        <div className='keyboard-container'>
            <div className='column-container' id='1'>
                <Key letter='q' />
                <Key letter='a' />
                <Key letter='z' />
            </div>
            <div className='column-container' id='1'>
                <Key letter='w' />
                <Key letter='s' />
                <Key letter='x' />
            </div>
            <div className='column-container' id='1'>
                <Key letter='e' />
                <Key letter='d' />
                <Key letter='c' />
            </div>
            <div className='column-container' id='1'>
                <Key letter='r' />
                <Key letter='f' />
                <Key letter='v' />
            </div>
            <div className='column-container' id='1'>
                <Key letter='t' />
                <Key letter='g' />
                <Key letter='b' />
            </div>
            <div className='column-container' id='1'>
                <Key letter='y' />
                <Key letter='h' />
                <Key letter='n' />
            </div>
            <div className='column-container' id='1'>
                <Key letter='u' />
                <Key letter='j' />
                <Key letter='m' />
            </div>
            <div className='column-container' id='1'>
                <Key letter='i' />
                <Key letter='l' />
                <Key letter='k' />
            </div>
            <div className='column-container' id='1'>
                <div className='backspace-container'>
                    <span><IoIosBackspace /></span>
                </div>
                <div className='enter-container'>
                    <span><IoEnter /></span>
                </div>
                <div className="emoji-container">
                    <span><BsEmojiSmile /></span>
                </div>
            </div>
        </div>
    )
}

export default Keyboard