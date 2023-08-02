import React, {createContext, useState} from 'react';

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [startDate, setStartDate] = useState(null);

    return (
        <Context.Provider value={{selectedCard, setSelectedCard, startDate, setStartDate}}>
            {children}
        </Context.Provider>
    );
};

export {
    Context,
    ContextProvider,
};