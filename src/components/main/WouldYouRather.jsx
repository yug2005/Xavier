import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/neurotech-logo.png";
import "./WouldYouRather.css";

import { HiChevronRight } from "react-icons/hi";

const questions = [
  {
    question: "Would you rather . . .",
    A: "lose your phone",
    B: "lose your keys",
    percentage: 33,
  },
  {
    question: "Would you rather . . .",
    A: "die tomorrow",
    B: "live forever",
    percentage: 17,
  },
  {
    question: "Would you rather eat . . .",
    A: "fruits",
    B: "vegtables",
    percentage: 88,
  },
  {
    question: "Would you rather . . .",
    A: "ski in the mountains",
    B: "vacation on the break",
    percentage: 29,
  },
  {
    question: "Would you rather only use . . .",
    A: "Windows",
    B: "Mac",
    percentage: 79,
  },
];

const WouldYouRather = () => {
  const [question, setQuestion] = useState(questions[0]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showDistribution, setShowDistribution] = useState(false);
  const [selected, setSelected] = useState("");
  const [enableFrequency, setEnableFrequency] = useState(false);

  const onSelect = (e) => {
    setSelected(e);
    setEnableFrequency(false);
    setShowDistribution(true);
  };

  const getNewQuestion = () => {
    if (questionIndex + 1 === questions.length) {
      setQuestionIndex(0);
      setQuestion(questions[0]);
    } else {
      setQuestionIndex(questionIndex + 1);
      setQuestion(questions[questionIndex + 1]);
    }
    setSelected("");
    setShowDistribution(false);
    setEnableFrequency(true);
  };

  return (
    <div className="wyr-container">
      <header className="header">
        <Link className="home-link" to="/">
          <img src={logo} alt="logo" />
          <div>
            <p className="neurotech-link">neurotech</p>
            <p className="uoft-link">uoft</p>
          </div>
        </Link>
      </header>
      <div className="wyr-question-box">
        <div className="mc-question">{question.question}</div>
        <span className="mc-right" onClick={() => getNewQuestion()}>
          <HiChevronRight />
        </span>
      </div>
      <div className="wyr-title"></div>
      <div className="wyr-options">
        <Option
          showDistribution={showDistribution}
          option={question.A}
          percentage={question.percentage}
          selected={selected}
          frequency={enableFrequency ? "frequency-10" : ""}
          onClick={() => onSelect("A")}
        />
        <Option
          showDistribution={showDistribution}
          option={question.B}
          percentage={100 - question.percentage}
          selected={selected}
          frequency={enableFrequency ? "frequency-18" : ""}
          onClick={() => onSelect("B")}
        />
      </div>
    </div>
  );
};

const Option = ({
  showDistribution,
  option,
  percentage,
  selected,
  frequency,
  onClick,
}) => {
    const width = percentage * 452 / 100
    const height = percentage * 150 / 100 

    const Overlay = {
        height: height
    }
  
    return (
    <div className={`wyr-option`} id={frequency} onClick={onClick}>
        {showDistribution && <div className="wyr-percentage">{percentage}%</div>}
        <div className="wyr-text">{option}</div>
        {showDistribution && <div className='wyr-overlay'>
            <div className="wyr-fill" style={Overlay}></div>
        </div>}
    </div>
  );
};

export default WouldYouRather;
