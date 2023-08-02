import React, {useState} from 'react';
import styles from './Slider.module.scss';
import button from "./images/button-next-prev.png";

const Slider = (props) => {
    console.log(props)
    const {data, number, Component, propsForComponent} = props;

    const [currentIndex, setCurrentIndex ] = useState(0);
    const handlePrev = () => {
        if (currentIndex !== 0) {
            setCurrentIndex(prev => prev - 1)
        }
    };

    const handleNext = () => {
        if (currentIndex !== data.length) {
            setCurrentIndex(prev => prev + 1)
        }
    };

    return (
        <div className={styles.slider_container}>
            <div
                onClick={handlePrev}
                className={`${styles.prev} ${currentIndex === 0 ? `${styles.none}` : ''}`}
            >
                <img src={button} alt="prev icon" />
            </div>

            <div className={styles.slider}>
                {
                    data?.slice(currentIndex, currentIndex + {number}).map(({propsForComponent}, index) => (<Component key={index} propsForComponent={propsForComponent}/>))
                }
            </div>

            <div
                onClick={handleNext}
                // className={`${styles.next} ${(currentIndex === data.length - 3
                //     || data.length < 3 ||
                //     (searchCities && filteredData.length < 3)) ? `${styles.none}` : ''}`}
                className={styles.next}
            >
                <img src={button} alt="next icon" />
            </div>
        </div>
    );
}

export default Slider;