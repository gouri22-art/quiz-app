import { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);

    //Login 
    const login = async(username, password) =>{
        try{
            const res = await axios.post("https://uneven-thread-rake.glitch.me/login",{username, password});
            setUser(res.data.user);

        }catch(error){
            console.log(error);
            alert("Login Failed");

        };

        return <AuthContext. Provider value={{user,login}}>{children}</AuthContext. Provider>
    };
}

export const useAuth = () => useContext(AuthContext);