import React, {useContext} from 'react';
import styles from './MainPage.module.scss';
import WeatherContainer from "../../components/WeatherContainer/WeatherContainer";
import ForecastForToday from "../../components/ForecastForToday/ForecastForToday";
import {Context} from "../../HOC/ContextProvider";
import background from '../../components/ForecastForToday/images/background.jpg';

const MainPage = () => {
    const currentDate = new Date().toLocaleDateString().split('.').reverse().join('-');
    const initialState = {
        city: 'Berlin',
        'startDate': `${currentDate}`,
        'endDate': `2023-08-05`
    }
    const trips = JSON.parse(localStorage.getItem('trips')) || [initialState];
    localStorage.setItem('trips', JSON.stringify(trips));

    return (
        <div className={styles.main_page}>
            <WeatherContainer/>
            {
                <ForecastForToday/>
               // selectedCard ?
               //     <ForecastForToday/> :
               //     <div style={{backgroundImage: `url(${background})`, width: '25vw', height: '100vh'}}></div>
            }
        </div>
    );
};

export default MainPage;