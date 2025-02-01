import { useState } from "react";
import "../styles/styles.css";

const QuizItem = ({question, onAnswer})=>{
    const[selected, setSelected] = useState(null);
    const[showAnswer, setShowAnswer] = useState(false);

    const handleSelect = (option) =>{
        setSelected(option);
        onAnswer(question.id, option);
    };

    return(
        <div className="question-card">
            <h3>{question.text}</h3>
            {question.option.map((option)=>{
                <button
                key={option}
                className={selected === option ? (option === question.correctAnswer ? "Correct": "Incorrect" ): ""}
                onClick={()=> handleSelect(option)}
                >
                    {option}
                </button>
            })}
            <button onClick={()=>setShowAnswer(!showAnswer)}>Show Answer</button>
            {showAnswer && <p>{selected === question.correctAnswer ? "Correct!" :`Incorrect! The answer is ${question.correctAnswer}`}</p>}


        </div>
    );

};

export default QuizItem;