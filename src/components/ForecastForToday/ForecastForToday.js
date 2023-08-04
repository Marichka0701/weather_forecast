import React, {useContext, useEffect, useState} from 'react';

import styles from './ForecastForToday.module.scss';
import {Context} from "../../HOC/ContextProvider";
import background from './images/background.jpg';
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import {weatherService} from "../../services/weather.service";

const ForecastForToday = () => {
    const { selectedCity, startTime } = useContext(Context);

    const [address, setAddress] = useState('');
    const [temp, setTemp] = useState(null);
    const [icon, setIcon] = useState('');

    const currentDate = new Date().toLocaleDateString().split('.').reverse().join('-');
    const dayOfWeek = new Date(currentDate).toLocaleString('en-US', { weekday: 'long' });

    useEffect(() => {
        const setData = async () => {
            try {
                const response = await weatherService.getForecastForToday(selectedCity);
                setAddress(response.data.address);
                setTemp(Math.round(response.data.days[0].temp));
                setIcon(response.data.days[0].icon);
            } catch (e) {
                console.error(e);
            }
        };
        setData();
    }, [selectedCity]);

    return (
        <div style={{ backgroundImage: `url(${background})` }} className={styles.forecast_for_today_container}>
            <div style={{color: 'white'}} className={styles.forecast_for_today}>
                <p className={styles.day}>{dayOfWeek}</p>
                <div>
                    {icon && <img src={require(`../WeekForecast/DayForecast/images/${icon}.png`)} alt={address} />}
                    <p>{temp}<sup>°c</sup></p>
                </div>
                <p className={styles.address}>{address}</p>
            </div>
            <CountdownTimer startTime={startTime}/>
        </div>
    );
};

export default ForecastForToday;