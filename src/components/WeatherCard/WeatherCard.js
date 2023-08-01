import React from 'react';
import styles from './WeatherCard.module.scss'

const WeatherCard = ({card}) => {
    const { city, startDate, endDate } = card;

    return (
        <div className={styles.weather_card}>
            <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80" alt=""/>
            <div>
                <p>{city}</p>
                <p>{startDate} - {endDate} </p>
            </div>
        </div>
    );
};

export default WeatherCard;