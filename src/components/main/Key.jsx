import "./Key.css"

const Key = ({letter, onSelected}) => {
    return (
        <div onClick={onSelected} className="key-container">
            <div className='key-letter'>{letter.toUpperCase()}</div>
        </div>
    )

}

Key.defaultProps = {
    letter: '',
    onSelected: ''
}

export default Key