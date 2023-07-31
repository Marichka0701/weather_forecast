import React from 'react';
import styles from './Modal.module.scss';
import Select from "./Select/Select";
import closeIcon from './images/close-icon.png';

const Modal = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.title_container}>
                <h2>Create trip</h2>
                <img src={closeIcon} alt="close icon"/>
            </div>
            <form>
                <label htmlFor="city">
                    <span><span className={styles.required}>*</span> City</span>
                    <Select/>
                </label>

                <label htmlFor="date">
                    <span><span className={styles.required}>*</span> Start date</span>
                    <input type="date"/>
                </label>

                <label htmlFor="date">
                    <span><span className={styles.required}>*</span> End date</span>
                    <input type="date"/>
                </label>
            </form>
            <div className={styles.buttons}>
                <button className={styles.cancel}>Cancel</button>
                <button className={styles.save}>Save</button>
            </div>
        </div>
    );
};

export default Modal;