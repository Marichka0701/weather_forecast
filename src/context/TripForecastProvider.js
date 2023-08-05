import React, {createContext, useEffect, useState} from 'react';

import {weatherService} from "../services/weather.service";
import {initialState} from "../constants/assets";

const TripForecast = createContext(null);
const TripForecastProvider = ({children}) => {
    const {city, startDate, endDate} = initialState;

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [selectedCity, setSelectedCity] = useState(city);

    useEffect(() => {
        weatherService.getForecastBetweenTwoDates(city, startDate, endDate)
            .then(response => setSelectedCard(response.data))
    }, [])

    return (
        <TripForecast.Provider
            value={{modalOpen,
                setModalOpen,
                selectedCard,
                setSelectedCard,
                startTime,
                setStartTime,
                selectedCity,
                setSelectedCity}}
        >
            {children}
        </TripForecast.Provider>
    );
};

export {
    TripForecast,
    TripForecastProvider,
};