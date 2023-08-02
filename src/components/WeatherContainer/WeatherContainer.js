import React, {useState} from 'react';
import styles from './WeatherContainer.module.scss';
import Header from "../Header/Header";
import SearchInput from "../SearchInput/SearchInput";
import AddTrip from "../AddTrip/AddTrip";
import WeatherCardsContainer from "../WeatherCardsContainer/WeatherCardsContainer";
import WeekForecast from "../WeekForecast/WeekForecast";

const WeatherContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const [searchCities, setSearchCities] = useState('');

    return (
        <div className={`${styles.weather_container} ${isOpen === true ? `${styles.open}` : `${styles.close}`}`}>
            <Header/>
            <SearchInput setSearchCities={setSearchCities}/>
            <div className={styles.cards}>
                <WeatherCardsContainer searchCities={searchCities} trigger={trigger}/>
                <AddTrip
                    setTrigger={setTrigger}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </div>
            <WeekForecast/>
        </div>
    );
};

export default WeatherContainer;