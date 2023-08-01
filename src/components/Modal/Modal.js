import React, {useState} from 'react';
import styles from './Modal.module.scss';
import closeIcon from './images/close-icon.png';
import {useForm} from "react-hook-form";
import {cities} from "../../constants/cities";
import {modalFormValidator} from "../../validators/modal.form.validator";
import {joiResolver} from '@hookform/resolvers/joi'

const Modal = ({setIsOpen, setTrigger}) => {
    const [startDate, setStartDate] = useState();

    const handleClick = () => {
        setIsOpen(false);
    };

    const maxDate = () => {
        const currentDate = new Date();
        const maxDate = new Date();
        maxDate.setDate(currentDate.getDate() + 15);

        if (maxDate.getMonth() !== currentDate.getMonth()) {
            maxDate.setMonth(currentDate.getMonth() + 1, 0);
        }

        return maxDate.toLocaleDateString().split('.').reverse().join('-');
    }

    const minDate = () => {
        const currentDate = new Date().toLocaleDateString();
        return currentDate.split('.').reverse().join('-');
    }

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm({
        mode: 'all',
        resolver: joiResolver(modalFormValidator)
    });

    const onSubmit = (data) => {
        const trips = JSON.parse(localStorage.getItem('trips')) || [];
        trips.push(data)
        localStorage.setItem('trips', JSON.stringify(trips));
        setIsOpen(false);
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
                                max={maxDate()}
                                type="date"
                            />
                            {errors.startDate && <span className={styles.error}>{errors.startDate.message}</span>}
                        </label>

                        <label htmlFor="date">
                            <span> <span className={styles.required}>*</span> End date</span>
                            <input
                                {...register('endDate')}
                                min={startDate}
                                max={maxDate()}
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
                        >Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;