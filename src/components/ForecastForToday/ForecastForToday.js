import React, {useContext, useEffect, useState} from 'react';
import styles from './ForecastForToday.module.scss';
import {Context} from "../../HOC/ContextProvider";
import background from './images/background.jpg';

import iconn from '../WeekForecast/DayForecast/images/clear-day.png'
import CountdownTimer from "../CountdownTimer/CountdownTimer";

const ForecastForToday = () => {
    const {selectedCard} = useContext(Context);
    console.log('selected card', selectedCard)

    const [address, setAddress] = useState('');
    const [days, setDays] = useState([]);
    const [currentDayForecast, setCurrentDayForecast] = useState(null);
    const [temp, setTemp] =  useState(null);
    const [icon, setIcon] = useState('');

    // format date for API, ex. 2023-08-02
    const currentDate = new Date().toLocaleDateString().split('.').reverse().join('-');
    const dayOfWeek = new Date(currentDate).toLocaleString('en-US', {weekday: "long"});

    const {startDate} = useContext(Context);

    useEffect( () => {
        const setData = async () => {
            await setAddress(selectedCard?.address);
            await setDays(selectedCard?.days);
            await setCurrentDayForecast(days?.filter(day => day.datetime === currentDate)[0]);
            await setTemp(Math.round(currentDayForecast?.temp));
            await setIcon(currentDayForecast?.icon)
        }
        setData();
        console.log('use effect спрацював')
        // setAddress(selectedCard?.address);
        // setDays(selectedCard?.days);
        // setCurrentDayForecast(days?.filter(day => day.datetime === currentDate)[0]);
        // setTemp(Math.round(currentDayForecast?.temp));
        // setIcon(currentDayForecast?.icon)
    }, [selectedCard, startDate])

    console.log('day of week', dayOfWeek)
    console.log('days', days);
    console.log('address', address)
    console.log('current day fore', currentDayForecast)


    return (
        <div style={{backgroundImage: `url(${background})`}} className={styles.forecast_for_today_container}>
            <div style={{color: 'white'}} className={styles.forecast_for_today}>
                {/*<p className={styles.day}>{dayOfWeek}</p>*/}
                <p className={styles.day}>Sunday</p>
                <div>
                    {/*{icon && <img src={require(`../WeekForecast/DayForecast/images/${icon}.png`)} alt=""/>}*/}
                    <img src={iconn} alt=""/>
                    {/*<p>{temp}<sup>°c</sup></p>*/}
                    <p>24<sup>°c</sup></p>
                </div>
                {/*<p className={styles.address}>{address}</p>*/}
                <p className={styles.address}>Berlin</p>
            </div>
            {selectedCard && <CountdownTimer startDate={startDate}/>}
        </div>
    );
};

export default ForecastForToday;