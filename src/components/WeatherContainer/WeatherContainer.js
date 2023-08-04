import React, {useContext, useState} from 'react';

import styles from './WeatherContainer.module.scss';
import Header from "../Header/Header";
import SearchInput from "../SearchInput/SearchInput";
import AddTrip from "../AddTrip/AddTrip";
import WeatherCardsContainer from "../WeatherCardsContainer/WeatherCardsContainer";
import WeekForecast from "../WeekForecast/WeekForecast";
import {Context} from "../../HOC/ContextProvider";

const WeatherContainer = () => {
    const {modalOpen, setModalOpen} = useContext(Context);
    const [trigger, setTrigger] = useState(false);
    const [searchCities, setSearchCities] = useState('');

    return (
        <div className={`${styles.weather_container} ${modalOpen === true ? `${styles.open}` : `${styles.close}`}`}>
            <Header/>
            <SearchInput setTrigger={setTrigger} setSearchCities={setSearchCities}/>
            <div className={styles.cards}>
                <WeatherCardsContainer
                    searchCities={searchCities}
                    trigger={trigger}
                />
                <AddTrip
                    setTrigger={setTrigger}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                />
            </div>
            <WeekForecast/>
        </div>
    );
};

export default WeatherContainer;