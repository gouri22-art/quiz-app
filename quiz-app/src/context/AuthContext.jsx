import { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);

    //Login 
    const login = async(username, password) =>{
        try{
            const res = await axios.post("https://efficacious-fixed-bear.glitch.me/login",{username, password,});
            if(res.data.success){
                setUser(res.data);
                return { success : true}
            }

        }
        catch(error){
            // console.log(error);
            // alert("Login Failed");
            return {success : false, message: " Invalid Credentials"};

        };

        return <AuthContext. Provider value={{user,login}}>{children}</AuthContext. Provider>
    };
}

export const useAuth = () => useContext(AuthContext);