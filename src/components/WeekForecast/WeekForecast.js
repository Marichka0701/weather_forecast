import React, {useContext, useEffect, useState} from 'react';

import styles from './WeekForecast.module.scss';
import {Context} from "../../HOC/ContextProvider";
import DayForecast from "./DayForecast/DayForecast";
import button from './images/button-next-prev.png';

const WeekForecast = () => {
    const {selectedCard} = useContext(Context);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedCard])

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 10 >= 0 ? prev - 10 : 0);
        }
    };

    const handleNext = () => {
        const remainingElements = selectedCard?.days?.length - (currentIndex + 10);
        if (remainingElements > 0) {
            setCurrentIndex((prev) => prev + 10);
        } else if (remainingElements > -10) {
            setCurrentIndex((prev) => prev + remainingElements + 10);
        }
    };

    return (
        <div className={styles.week_forecast}>
            <h2>Week</h2>

            <div
                onClick={handlePrev}
                className={`${styles.prev} ${currentIndex === 0 ? `${styles.none}` : ''}`}
            >
                <img src={button} alt="prev icon" />
            </div>

            <div className={styles.days_container}>
                {selectedCard &&
                    selectedCard?.days?.slice(currentIndex, currentIndex + 10)
                        .map((day, index) => (
                            <DayForecast key={index} day={day}/>
                        ))}
            </div>

            <div
                onClick={handleNext}
                className={`${styles.next} ${currentIndex === selectedCard?.days?.length || 
                !selectedCard || 
                (currentIndex >= 10 && currentIndex < selectedCard?.days?.length) || 
                    selectedCard?.days?.length < 10 ? `${styles.none}` : ''}`}
            >
                <img src={button} alt="next icon" />
            </div>

        </div>
    );
};

export default WeekForecast;