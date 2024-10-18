import { createContext, useState } from "react";

export const DarkContext = createContext();

const DarkContextProvider = ({ children }) => {

    const [Theme, setTheme] = useState('white')

    const [darkState, setdarkSTATE] = useState('Off')

    const toggleTheme = () => {
        setTheme((Theme) => Theme === 'white' ? 'gray' : 'white')
        setdarkSTATE((State) => State === 'Off' ? 'On' : 'Off')
    }

    return (
        <DarkContext.Provider value={{ Theme, toggleTheme, darkState }} >
            {children}
        </DarkContext.Provider>
    );
}

export default DarkContextProvider;