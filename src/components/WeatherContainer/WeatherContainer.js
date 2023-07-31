import React from 'react';
import styles from './WeatherContainer.module.scss';
import Header from "../Header/Header";

const WeatherContainer = () => {
    return (
        <div className={styles.weather_container}>
            <Header/>
        </div>
    );
};

export default WeatherContainer;