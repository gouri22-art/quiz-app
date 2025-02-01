import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import "../styles/styles.css";
import { log } from "console";

const Home = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(credentials.username, credentials.password);
        navigate("/quiz");
    }
    return (
        <div className="container">
            <h2>Welcome to the quiz App!</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" onChange={(e)=>setCredentials({...credentials,username:e.target.value})} />
                <input type="password" placeholder="Password" onChange={(e)=>setCredentials({...credentials,password:e.target.value})} />
                <button type="submit">Login</button>

            </form>

        </div>
    );
}

export default Home;