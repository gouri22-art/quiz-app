import { useEffect,useState } from "react";
import axios from "axios";
import QuizItem from "./QuizItem";
import { useNavigate } from "react-router";
import "../styles/styles.css";

const Quiz = () =>{
    const[questions, setQuestions]= useState([]);
    const[answers, setAnswers] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("https://efficacious-fixed-bear.glitch.me/questions")
        .then((res)=> setQuestions(res.data));

    }, []);

    const handleAnswer = (qId, answer) =>{
        setAnswers({...answers, [qId]:answer});

    };

    const submitQuiz = () =>{
        axios.post("https://efficacious-fixed-bear.glitch.me/submit",{answers})
        .then(()=> navigate("/result"));

    };

    return(
        <div className="container">
            <h2>Take the Quiz</h2>
            {questions.map((q,index)=>{
                <QuizItem key ={q.id} question ={q} onAnswer={handleAnswer}/>
            })}
            <button onClick={submitQuiz}>Submit Quiz</button>
        </div>
    );
};

export default Quiz;