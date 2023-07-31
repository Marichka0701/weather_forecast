import React from 'react';
import styles from './Select.module.scss';
import {cities} from "../../constants/cities";

const Select = () => {
    // fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?unitGroup=metric&key=WZ9T637KPXPHWYGUU7BQWP4R6&contentType=json')
    //     .then(response => response.json())
    //     .then(value => console.log(value))

    return (
        <div className={styles.select_wrapper}>
            <select className={styles.select}>
            {
                cities.map((city, index) => <option
                    disabled={index === 0}
                    selected={index === 0}
                    value={city.value}
                >{city.name}</option>)
            }
        </select>
        </div>
    );
};

export default Select;