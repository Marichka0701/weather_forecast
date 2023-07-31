import React from 'react';
import styles from './MainPage.module.scss';
import WeatherContainer from "../../components/WeatherContainer/WeatherContainer";
import Select from "../../components/Modal/Select/Select";
import Modal from "../../components/Modal/Modal";

const MainPage = () => {
    return (
        <div>
            <WeatherContainer/>
            {/*<Select/>*/}
            <Modal/>
        </div>
    );
};

export default MainPage;