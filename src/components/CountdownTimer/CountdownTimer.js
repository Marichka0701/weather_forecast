import React, {useEffect, useState} from 'react';
import styles from './CountdownTimer.module.scss';

const CountdownTimer = ({startDate}) => {
    const calculateTimeRemaining = () => {
        const now = new Date().getTime();
        const target = new Date(startDate).getTime();
        const timeRemaining = target - now;

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

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, [startDate]);

    return (
        <div  className={styles.countdown_timer}>
            {
                (timeRemaining.days === 0 &&
                timeRemaining.hours === 0 &&
                timeRemaining.minutes === 0 &&
                timeRemaining.seconds === 0) ?
                    <p className={styles.timeUp}>Your trip has already begun. Have a good trip!</p> :
             <>
                <div>
                    <p>{timeRemaining.days}</p>
                    <p>DAYS</p>
                </div>

                <div>
                    <p>{timeRemaining.hours}</p>
                    <p>HOURS</p>
                </div>

                <div>
                    <p>{timeRemaining.minutes}</p>
                    <p>MINUTES</p>
                </div>

                <div>
                    <p>{timeRemaining.seconds}</p>
                    <p>SECONDS</p>
                </div>
            </>
            }
        </div>
    );
};

export default CountdownTimer;