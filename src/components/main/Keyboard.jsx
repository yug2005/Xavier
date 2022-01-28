import Key from './Key'
import "./Keyboard.css"

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
        </div>
    )
}

export default Keyboard