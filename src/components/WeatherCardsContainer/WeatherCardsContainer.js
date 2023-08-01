import React, {useEffect, useState} from 'react';
import styles from './WeatherCardsContainer.module.scss';
import WeatherCard from "../WeatherCard/WeatherCard";

const WeatherCardsContainer = ({trigger}) => {
    // const currentDate = new Date().toLocaleDateString().split('.').reverse().join('-');
    // const initialState = {
    //     city: 'Berlin',
    //     'startDate': `${currentDate}`,
    //     'endDate': `2023-08-05`
    // }
    //
    const [data, setData] = useState([]);
    // const trips = JSON.parse(localStorage.getItem('trips'));
    //
    //
    useEffect(()=> {
        // trips && setData(prev => [...prev, trips]);
       // const trips = localStorage.getItem('trips');
        setData(JSON.parse(localStorage.getItem('trips')))
       // trips ? setData(JSON.parse(localStorage.getItem('trips'))) : []
    }, [trigger])
    // const data = JSON.parse(localStorage.getItem('trips'));

    return (
        <div className={styles.weather_cards_container}>
            {
                data.map(card => <WeatherCard key={card.startDate} card={card} />)
            }
        </div>
    );
};

export default WeatherCardsContainer;