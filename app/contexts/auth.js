'use client';
import { createContext , useState } from "react";
import axios from "axios";

export const AuthContext=createContext();
export function AuthWrapper({children}){
    const [globalState , setGlobalState]= useState({
        tokens : null,
        login : login,
    })
    
    async function login(userInfo){
        const url = " https://cookeis.herokuapp.com/admin"; 
        const res= await axios.post(url,userInfo);
        
        setGlobalState({
            tokens :res.data,
            login:login
        })
    }
    
    return (
        <AuthContext.Provider value ={globalState}>
            {children}
        </AuthContext.Provider>
    )
}
 

