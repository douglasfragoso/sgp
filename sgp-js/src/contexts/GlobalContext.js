import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [userLogin, setUserLogin] = useState(false);

    const login = (userDetails) => {
        setUserLogin(userDetails);

        if(userDetails?.remember) {
            localStorage.setItem('userLogin', JSON.stringify(userDetails));
        } else {
            sessionStorage.setItem('userLogin', JSON.stringify(userDetails));
        }
    }

    const logout = () => {
        setUserLogin({});
        localStorage.removeItem('userLogin');
        sessionStorage.removeItem('userLogin');
    }
 
    return (
        <GlobalContext.Provider value={{userLogin, login, logout}}>
            {children}
        </GlobalContext.Provider>
    );
}