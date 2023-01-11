'use client';

import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthWrapper({children}) {

    const [globalState, SetGlobalState] = useState({
        tokens : null,
        login,
    })

    async function login(userInfo) {
        
        const url = "https://cookeis.herokuapp.com/api/token/"; 
        try{
        const res = await axios.post(url, userInfo);
        console.log(res.data)
        SetGlobalState({
            tokens : res.data,

            login,

        })

        }
        catch {
            console.log("This user is not register")
            alert(" this user is not registering")
        }

        

    }


    return(
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )
}