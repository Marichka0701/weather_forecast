import React from 'react';

import styles from './MainPage.module.scss';
import WeatherContainer from "../../components/WeatherContainer/WeatherContainer";
import ForecastForToday from "../../components/ForecastForToday/ForecastForToday";
import {initialState} from "../../constants/assets";

const MainPage = () => {
    const trips = JSON.parse(localStorage.getItem('trips')) || [initialState];
    localStorage.setItem('trips', JSON.stringify(trips));

    return (
        <div className={styles.main_page}>
            <WeatherContainer/>
            <ForecastForToday/>
        </div>
    );
};

export default MainPage;