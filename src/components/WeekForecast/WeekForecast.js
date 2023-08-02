import React, {useContext, useEffect, useState} from 'react';
import styles from './WeekForecast.module.scss';
import {Context} from "../../HOC/ContextProvider";
import DayForecast from "./DayForecast/DayForecast";
import WeatherCard from "../WeatherCard/WeatherCard";
import button from './images/button-next-prev.png';
import Slider from "../Slider/Slider";

const WeekForecast = () => {
    const {selectedCard} = useContext(Context);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

    }, [selectedCard])

    console.log(selectedCard)

    const handlePrev = () => {
        if (currentIndex !== 0) {
            setCurrentIndex(prev => prev - 1 )
        }
    };

    const handleNext = () => {
        if (currentIndex !== selectedCard?.days.length) {
            setCurrentIndex(prev => prev + 1)
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
                {
                    // selectedCard && selectedCard.days.map((day, index) => <DayForecast key={index} day={day}/>)
                    selectedCard && selectedCard?.days.slice(currentIndex, currentIndex + 10).map((day, index) => (
                        <DayForecast key={index} day={day} />))
                    // selectedCard && <Slider data={selectedCard?.days} number={7} Component={DayForecast} propsForComponent={'day'} />
                }
            </div>

            <div
                onClick={handleNext}
                className={`${styles.next} ${currentIndex === selectedCard?.days.length ? `${styles.none}` : ''}`}
                // className={`${styles.next} ${(currentIndex === data.length - 3
                //     || data.length < 3 ||
                //     (searchCities && filteredData.length < 3)) ? `${styles.none}` : ''}`}
            >
                <img src={button} alt="next icon" />
            </div>

        </div>
    );
};

export default WeekForecast;