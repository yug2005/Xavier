import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/neurotech-logo.png"
import "./MultipleChoice.css"

import { HiChevronRight } from 'react-icons/hi'

const questions = [
    {
        question: "What is a baby cow called?",
        A: "cub", 
        B: "colt",
        C: "lamb", 
        D: "calf",
        answer: 'D'
    },
    {
        question: "How long does it take sunlight to reach the Earth?", 
        A: "8 minutes",
        B: "1 minute", 
        C: "36 minutes",
        D: "15 seconds", 
        answer: 'A'
    },
    {
        question: "Which word is a synonym for the word fatigue?",
        A: "excitement", 
        B: "exhaustion",
        C: "obese", 
        D: "fragile",
        answer: 'B'
    },
    {
        question: "What is a smaller body that revoles around a planet called?",
        A: "star", 
        B: "moon",
        C: "Milky Way", 
        D: "sun",
        answer: 'B'
    },
    {
        question: "Which Apollo mission was the first one to land on the moon?",
        A: "Apollo 7", 
        B: "Apollo 9",
        C: "Apollo 11", 
        D: "Apollo 13",
        answer: 'C'
    }
]

const MultipleChoice = () => {
    const [enableFrequency, setEnableFrequency] = useState(true)

    const [questionIndex, setQuestionIndex] = useState(0)
    const [question, setQuestion] = useState(questions[0])

    const [showAnswer, setShowAnswer] = useState(false)
    const [selected, setSelected] = useState('')

    const onSelect = (choice) => {
        setSelected(choice)
        setEnableFrequency(false)
        setShowAnswer(true)
    }

    const getNewQuestion = () => {
        if (questionIndex + 1 === questions.length) {
            setQuestionIndex(0)
            setQuestion(questions[0])
        }
        else {
            setQuestionIndex(questionIndex + 1)
            setQuestion(questions[questionIndex + 1])
        }
        setSelected('')
        setShowAnswer(false)
        setEnableFrequency(true)
    }
    
    return (
        <div className="mc-container">
            <header className='header' >
                <Link className="home-link" to='/'>
                    <img src={logo} alt="logo" />
                    <div>
                        <p className='neurotech-link'>neurotech</p>
                        <p className='uoft-link'>uoft</p>  
                    </div>
                </Link>
            </header>
            <div className="mc-question-box">
                <div className="mc-question">{question.question}</div>
                <span className='mc-right' onClick={() => getNewQuestion()}><HiChevronRight /></span>
            </div>
            <div className="mc-options">
                <Choice answer={question.answer === 'A'} text={question.A} frequency={enableFrequency ? "frequency-12" : ""} selected={selected === 'A'} showAnswer={showAnswer} onClick={() => onSelect('A')}/>
                <Choice answer={question.answer === 'B'} text={question.B} frequency={enableFrequency ? "frequency-18" : ""} selected={selected === 'B'} showAnswer={showAnswer} onClick={() => onSelect('B')}/>
                <Choice answer={question.answer === 'C'} text={question.C} frequency={enableFrequency ? "frequency-10" : ""} selected={selected === 'C'} showAnswer={showAnswer} onClick={() => onSelect('C')}/>
                <Choice answer={question.answer === 'D'} text={question.D} frequency={enableFrequency ? "frequency-15" : ""} selected={selected === 'D'} showAnswer={showAnswer} onClick={() => onSelect('D')}/>
            </div>
        </div>
    )
}

const Choice = ({ answer, text, frequency, selected, showAnswer, onClick }) => {
    return (
        <div className={`mc-option ${showAnswer ? (answer ? 'mc-answer' : 'mc-wrong') : ''} ${showAnswer ? (selected ? 'mc-selected' : '') : ''}`} 
            id={frequency} onClick={onClick}>
            <div className="mc-text">{text}</div>
        </div>
    )
}

export default MultipleChoice

