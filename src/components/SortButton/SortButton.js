import React from 'react';

import styles from './SortButton.module.scss';

const SortButton = ({setTrigger}) => {
    const handleClick = () => {
        const trips = JSON.parse(localStorage.getItem('trips'));
        const sortedTrips = (trips.sort((a, b) => new Date(a.startDate) - new Date(b.startDate)));
        localStorage.setItem('trips', JSON.stringify(sortedTrips));
        setTrigger(prev => !prev)
    };

    return (
        <div className={styles.sort}>
            <button onClick={handleClick}>Sort</button>
        </div>
    );
};

export default SortButton;