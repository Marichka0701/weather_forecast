import React, {useEffect, useState} from 'react';
import styles from './WeatherCardsContainer.module.scss';
import WeatherCard from "../WeatherCard/WeatherCard";
import button from './images/button-next-prev.png';

const WeatherCardsContainer = ({trigger}) => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=> {
        setData(JSON.parse(localStorage.getItem('trips')))
    }, [trigger])

    const handlePrev = () => {
        if (currentIndex !== 0) {
            setCurrentIndex(prev => prev - 1)
        }
    };

    const handleNext = () => {
        if (currentIndex !== data.length) {
            setCurrentIndex(prev => prev + 1)
        }
    };

    return (
        <div className={styles.weather_cards_container}>
            <div
                onClick={handlePrev}
                className={`${styles.prev} ${currentIndex === 0 ? `${styles.none}` : ''}`}
            >
                <img src={button} alt="prev icon" />
            </div>
            <div className={styles.slider}>
                {
                    data.slice(currentIndex, currentIndex + 3).map((card, index) => (
                    <WeatherCard key={index} card={card} />
                ))
                }
            </div>
            <div
                onClick={handleNext}
                className={`${styles.next} ${currentIndex === data.length - 3 || data.length < 3 ? `${styles.none}` : ''}`}
            >
                <img src={button} alt="next icon" />
            </div>
        </div>
    );
};

export default WeatherCardsContainer;