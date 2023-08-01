import React from 'react';
import styles from './WeatherCard.module.scss'
import {photos} from '../../constants/cities';

const WeatherCard = ({card}) => {
    const { city, startDate, endDate } = card;
    const startDateFormatted = startDate.split('-').reverse().join('.');
    const endDateFormatted = endDate.split('-').reverse().join('.');

    return (
        <div className={styles.weather_card}>
            {
                photos.map(photo => photo.name === city ? <img src={photo.image} alt={city} /> : null)
            }
            <div>
                <p>{city}</p>
                <p>{startDateFormatted} - {endDateFormatted} </p>
            </div>
        </div>
    );
};

export default WeatherCard;