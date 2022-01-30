import { useState, useEffect } from 'react'

const WouldYouRather = () => {
    const [optionToggle, setOptionToggle] = useState(false); 
    
    return (
        <div className="wyr-container">
            <div className='wyr-title'></div>
            <div className="wyr-options">
                <Option option="Lose your phone" percentage={33}/>
                <Option option="Lose your keys" percentage={67}/>
            </div>
        </div>
    )
}

const Option = ({option, percentage}) => {
    const [selected, setSelected] = useState(false); 

    return (
        <div onClick={() => setSelected(!selected)} className={`option ${selected ? 'selected-option' : ''}`}>
            {selected && <div>{percentage}%</div>}
            <div>{option}</div>
        </div>
    )
}

export default WouldYouRather

