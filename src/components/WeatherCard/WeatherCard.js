import React, {useContext} from 'react';

import styles from './WeatherCard.module.scss'
import {photos} from '../../constants/cities';
import {weatherService} from "../../services/weather.service";
import {Context} from "../../HOC/ContextProvider";

const WeatherCard = ({card}) => {
    const { city, startDate, endDate } = card;
    const startDateFormatted = startDate.split('-').reverse().join('.');
    const endDateFormatted = endDate.split('-').reverse().join('.');

    const {setSelectedCard, setStartTime, setSelectedCity} = useContext(Context);

    const handleClick = () => {
        weatherService.getForecastBetweenTwoDates(city, startDate, endDate)
            .then(response => setSelectedCard(response.data))
        setStartTime(startDate);
        setSelectedCity(city);
    };

    return (
        <div onClick={handleClick} className={styles.weather_card}>
            {
                photos.map((photo, index) => photo.name === city ?
                    <img key={index} src={photo.image} alt={city} /> :
                    null)
            }
            <div>
                <p>{city}</p>
                <p> {startDateFormatted} - {endDateFormatted} </p>
            </div>
        </div>
    );
};

export default WeatherCard;