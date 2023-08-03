import React, {useState} from 'react';
import {joiResolver} from '@hookform/resolvers/joi'
import {useForm} from "react-hook-form";

import styles from './Modal.module.scss';
import closeIcon from './images/close-icon.png';
import {cities} from "../../constants/cities";
import {modalFormValidator} from "../../validators/modal.form.validator";

const Modal = ({setModalOpen, setTrigger}) => {
    const [startDate, setStartDate] = useState();

    const handleClick = () => {
        setModalOpen(false);
    };

    const maxDate = (date) => {
        // format the date to YYYY-MM-DD
        const currentDate = new Date().toLocaleDateString().split('.').reverse().join('-');

        // if condition true, we set max date for input 'endDate'
        // if condition false, we set max date for input 'startDate'
        if (date && date !== currentDate) {
            const maxDate = new Date(new Date(date.split('-').join('.')).getTime() + 15 * 24 * 60 * 60 * 1000);
            return maxDate.toLocaleDateString().split('.').reverse().join('-');
        } else {
            const maxDate = new Date(new Date(currentDate).getTime() + 15 * 24 * 60 * 60 * 1000);
            return maxDate.toLocaleDateString().split('.').reverse().join('-');
        }
    }

    const minDate = () => {
        const currentDate = new Date().toLocaleDateString();
        return currentDate.split('.').reverse().join('-');
    }

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
    } = useForm({
        mode: 'all',
        resolver: joiResolver(modalFormValidator)
    });

    const onSubmit = (data) => {
        const trips = JSON.parse(localStorage.getItem('trips')) || [];
        trips.push(data);
        localStorage.setItem('trips', JSON.stringify(trips));
        setModalOpen(false);
        setTrigger(prev => !prev);
        reset();
    };

    const handleChange = (e) => {
        e.preventDefault();
        setStartDate(e.target.value);
    };

    return (
        <div className={styles.modal_container}>
            <div className={styles.modal}>
                <div className={styles.title_container}>
                    <h2>Create trip</h2>
                    <img onClick={handleClick} src={closeIcon} alt="close icon"/>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputs_container}>
                        <label htmlFor="city">
                            <span><span className={styles.required}>*</span> City</span>
                            <div className={styles.select_wrapper}>
                                <select
                                    {...register('city')}
                                    className={styles.select}
                                >
                                    {
                                        cities.map((city, index) => <option
                                            disabled={index === 0}
                                            selected={index === 0}
                                            value={city.value}
                                            key={index}
                                        >{city.name}</option>)
                                    }
                                </select>
                            </div>
                            {errors.city && <span className={styles.error}> {errors.city.message} </span>}
                        </label>

                        <label htmlFor="date">
                            <span><span className={styles.required}>*</span> Start date</span>
                            <input
                                {...register('startDate')}
                                onChange={handleChange}
                                min={minDate()}
                                max={maxDate(minDate())}
                                type="date"
                            />
                            {errors.startDate && <span className={styles.error}>{errors.startDate.message}</span>}
                        </label>

                        <label htmlFor="date">
                            <span> <span className={styles.required}>*</span> End date</span>
                            <input
                                {...register('endDate')}
                                min={startDate}
                                max={maxDate(startDate)}
                                type="date"
                            />
                            {errors.endDate && <span className={styles.error}>{errors.endDate.message}</span>}
                        </label>
                    </div>

                    <div className={styles.buttons}>
                        <button
                            onClick={handleClick}
                            className={styles.cancel}
                        >Cancel</button>
                        <button
                            type='submit'
                            className={styles.save}
                            disabled={!isValid}
                        >Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;