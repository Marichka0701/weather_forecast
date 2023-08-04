import React from 'react';

import styles from './DayForecast.module.scss';

const DayForecast = ({day}) => {
    const {datetime, icon, tempmax, tempmin} = day;
    const dayOfWeek = new Date(datetime).toLocaleString('en-US', {weekday: "long"});

    return (
        <div className={styles.day_forecast}>
            <p>{dayOfWeek}</p>
            <img src={require(`./images/${icon}.png`)} alt={icon} />
            <p>{Math.round(tempmax)}°/{Math.round(tempmin)}°</p>
        </div>
    );
};

export default DayForecast;