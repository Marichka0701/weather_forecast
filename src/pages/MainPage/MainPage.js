import React, {useContext} from 'react';
import styles from './MainPage.module.scss';
import WeatherContainer from "../../components/WeatherContainer/WeatherContainer";
import ForecastForToday from "../../components/ForecastForToday/ForecastForToday";
import {Context} from "../../HOC/ContextProvider";
import background from '../../components/ForecastForToday/images/background.jpg';
import {initialState} from "../../constants/assets";

const MainPage = () => {
    const trips = JSON.parse(localStorage.getItem('trips')) || [initialState];
    localStorage.setItem('trips', JSON.stringify(trips));

    const {selectedCity} = useContext(Context);

    return (
        <div className={styles.main_page}>
            <WeatherContainer/>
            {
                selectedCity ?
                    <ForecastForToday/> :
                    <div style={{backgroundImage: `url(${background})`, width: '25vw', height: '100vh'}}></div>
               // selectedCard ?
               //     <ForecastForToday/> :
               //     <div style={{backgroundImage: `url(${background})`, width: '25vw', height: '100vh'}}></div>
            }
        </div>
    );
};

export default MainPage;