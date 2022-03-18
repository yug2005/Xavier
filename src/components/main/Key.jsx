import "./Key.css"

const Key = ({letter, onKeyClick, frequency, selected}) => {
    
    if (frequency) {
        return (
            <div onClick={() => onKeyClick(letter)} className="key-container" id={frequency}>
                <div className='key-letter'>{letter.toUpperCase()}</div>
            </div>
        )
    }
    if (selected) {
        return (
            <div onClick={() => onKeyClick(letter)} className="key-container key-selected">
                <div className='key-letter'>{letter.toUpperCase()}</div>
            </div>
        )
    }
    
    return (
        <div onClick={() => onKeyClick(letter)} className="key-container">
            <div className='key-letter'>{letter.toUpperCase()}</div>
        </div>
    )
}

Key.defaultProps = {
    letter: '',
    onSelected: '',
    frequency: '',
    selected: false

}

export default Key