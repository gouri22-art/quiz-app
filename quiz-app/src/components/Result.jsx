import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "../styles/styles.css";

const Result = () => {
    const { user } = useAuth();
    const [score, setScore] = useState(null);

    useEffect(() => {
        axios.get(`https://efficacious-fixed-bear.glitch.me/${user.id}`)
            .then((res) => setScore(res.data.score));

    }, [user]);

    return (
        <div className="container">
            <h2>Yay! Quiz Completed..!</h2>
            {score !== null ? <p>You answered {score} questions correctly!</p> : <p>Loading ...</p>}


        </div>
    );
};

export default Result;