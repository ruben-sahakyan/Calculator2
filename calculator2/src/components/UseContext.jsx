import { createContext, useState } from "react";


export const dataContext = createContext({});


export function DataProvider({children}) {
    const [dataField, setDataField] = useState({});
    return (
        <dataContext.Provider value={{dataField, setDataField}}>
            {children}
        </dataContext.Provider>
    );
};