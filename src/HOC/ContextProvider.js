import React, {createContext, useEffect, useState} from 'react';
import {weatherService} from "../services/weather.service";
import {initialState} from "../constants/assets";

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const {city, startDate, endDate} = initialState;

    const [selectedCard, setSelectedCard] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [selectedCity, setSelectedCity] = useState(city);

    useEffect(() => {
        weatherService.getForecastBetweenTwoDates(city, startDate, endDate)
            .then(response => setSelectedCard(response.data))
    }, [])

    return (
        <Context.Provider value={{selectedCard, setSelectedCard, startTime, setStartTime, selectedCity, setSelectedCity}}>
            {children}
        </Context.Provider>
    );
};

export {
    Context,
    ContextProvider,
};