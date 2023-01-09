'use client';
// 1. create the provider, that will provide the global state to my app
// 1.1 create the context
// 1.2 create the context wrapper (provider)

import { createContext, useEffect, useState } from "react"
// 1.1 create the context
export const ThemeContext = createContext();

// 1.2 create the context wrapper (provider)
export default function ThemeWrapper ({children}){

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [pres, setPres] = useState([]);
    const store = JSON.parse(localStorage.getItem('theme'));

    

    function initialThemeHandle(){
         if (store==false){
            setIsDarkTheme(store)
            document.querySelector("body").classList.toggle("dark"); // add dark class to the body element

         }
         else
            {        
                isDarkTheme && document.querySelector("body").classList.add("dark"); // add dark class to the body element
        }    }
    
    function toggleThemeHandler() {
        setIsDarkTheme(!isDarkTheme);
        document.querySelector("body").classList.toggle("dark"); // add dark class to the body element
        localStorage.setItem('theme', JSON.stringify(!isDarkTheme));

    }
    
    const globalState = {
        isDarkTheme: true,
        toggleThemeHandler
    }

    useEffect(() => {
        if (store){
            setPres(store)
        }
        initialThemeHandle()
      }, [store]);
      

    useEffect(()=>initialThemeHandle());
    return(
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    )

}