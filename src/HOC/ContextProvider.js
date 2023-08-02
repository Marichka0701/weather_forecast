import React, {createContext, useState} from 'react';

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [selectedCard, setSelectedCard] = useState();

    return (
        <Context.Provider value={{selectedCard, setSelectedCard}}>
            {children}
        </Context.Provider>
    );
};

export {
    Context,
    ContextProvider,
};