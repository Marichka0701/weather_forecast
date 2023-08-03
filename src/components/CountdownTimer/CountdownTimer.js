import React, {useEffect, useState} from 'react';

import styles from './CountdownTimer.module.scss';

const CountdownTimer = ({startTime}) => {
    const calculateTimeRemaining = () => {
        const currentTime = new Date().getTime();
        const endTime = new Date(startTime).getTime();
        const timeRemaining = endTime - currentTime;

        if (timeRemaining < 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    const {days, hours, minutes, seconds} = timeRemaining;

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, [startTime]);

    return (
        <div  className={styles.countdown_timer}>
            {
                (days === 0 &&
                hours === 0 &&
                minutes === 0 &&
                seconds === 0) ?
                    <p className={styles.timeUp}>Your trip has already begun. Have a good trip!</p> :
             <>
                <div>
                    <p>{days}</p>
                    <p>DAYS</p>
                </div>

                <div>
                    <p>{hours}</p>
                    <p>HOURS</p>
                </div>

                <div>
                    <p>{minutes}</p>
                    <p>MINUTES</p>
                </div>

                <div>
                    <p>{seconds}</p>
                    <p>SECONDS</p>
                </div>
            </>
            }
        </div>
    );
};

export default CountdownTimer;