import { createContext, useState } from "react";

export const ThemeContext =  createContext({
    theme: '',
    toggleTheme:() => {},
});
export default function ThemeContextProvider ({children}) {
    const [theme, setTheme] =  useState('light');
    const toggleTheme =() => {             
        setTheme(prevTheme => {
            return prevTheme === 'light' ? 'dark' : 'light';           
        })
    };
    const themeValue = {
        theme,
        toggleTheme
    }
   return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
};
