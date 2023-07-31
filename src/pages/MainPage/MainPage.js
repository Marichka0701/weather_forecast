import React from 'react';
import styles from './MainPage.module.scss';
import WeatherContainer from "../../components/WeatherContainer/WeatherContainer";
import Select from "../../components/Modal/Select/Select";
import Modal from "../../components/Modal/Modal";
import SearchInput from "../../components/SearchInput/SearchInput";

const MainPage = () => {
    return (
        <div>
            <WeatherContainer/>
            {/*<Select/>*/}
            {/*<Modal/>*/}
            <SearchInput/>
        </div>
    );
};

export default MainPage;