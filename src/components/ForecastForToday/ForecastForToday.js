import React, {useContext, useEffect, useState} from 'react';
import styles from './ForecastForToday.module.scss';
import {Context} from "../../HOC/ContextProvider";
import background from './images/background.jpg';

import iconn from '../WeekForecast/DayForecast/images/clear-day.png'

import CountdownTimer from "../CountdownTimer/CountdownTimer";
import {weatherService} from "../../services/weather.service";

const ForecastForToday = () => {
    const {selectedCity} = useContext(Context);

    const [address, setAddress] = useState('');
    const [currentDayForecast, setCurrentDayForecast] = useState(null);
    const [temp, setTemp] =  useState(null);
    const [icon, setIcon] = useState('');

    // format date for API, ex. 2023-08-02
    const currentDate = new Date().toLocaleDateString().split('.').reverse().join('-');
    const dayOfWeek = new Date(currentDate).toLocaleString('en-US', {weekday: "long"});

    const {startTime} = useContext(Context);

    useEffect( () => {
        const setData = async () => {
            try {
                const response = await weatherService.getForecastForToday(selectedCity);
                setCurrentDayForecast(response.data);
                setAddress(currentDayForecast.address);
                setTemp(Math.round(currentDayForecast.days[0].temp));
                setIcon(currentDayForecast.days[0].icon)
            } catch (e) {
                console.error(e)
            }
        }
        setData();
    }, [selectedCity, startTime])

    return (
        <div style={{backgroundImage: `url(${background})`}} className={styles.forecast_for_today_container}>
            <div style={{color: 'white'}} className={styles.forecast_for_today}>
                <p className={styles.day}>{dayOfWeek}</p>
                {/*<p className={styles.day}>Sunday</p>*/}
                <div>
                    {icon && <img src={require(`../WeekForecast/DayForecast/images/${icon}.png`)} alt=""/>}
                    {/*<img src={iconn} alt=""/>*/}
                    <p>{temp}<sup>°c</sup></p>
                    {/*<p>24<sup>°c</sup></p>*/}
                </div>
                <p className={styles.address}>{address}</p>
                {/*<p className={styles.address}>Berlin</p>*/}
            </div>
            {selectedCity && <CountdownTimer startTime={startTime}/>}
        </div>
    );
};

export default ForecastForToday;