import { useEffect,useState } from "react";
import axios from "axios";
import QuizItem from "./QuizItem";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import "../styles/styles.css";

const Quiz = () =>{
    const[questions, setQuestions]= useState([]);
    const[answers, setAnswers] = useState({});
    const navigate = useNavigate();
    const {user} = useAuth();

    useEffect(()=>{
        axios.get("https://efficacious-fixed-bear.glitch.me/api/questions")
        .then((res)=> {
            if(res.data.success)  setQuestions(res.data.questions);
        });

    }, []);

    // const handleAnswer = (qId, answer) =>{
    //     setAnswers({...answers, [qId]:answer});

    // };

    const submitQuiz = () =>{
        axios.post("https://efficacious-fixed-bear.glitch.me/api/submit",{userId: user.userId, answers})
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