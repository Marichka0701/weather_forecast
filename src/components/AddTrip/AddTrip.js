import React, {useState} from 'react';
import styles from './AddTrip.module.scss';
import addIcon from './images/add-icon.png';
import Modal from "../Modal/Modal";

const AddTrip = ({isOpen, setIsOpen, setTrigger}) => {

    const handleClick = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div onClick={handleClick} className={styles.add_trip}>
                <img src={addIcon} alt="add icon"/>
                Add trip
            </div>
            {isOpen && <Modal setTrigger={setTrigger} setIsOpen={setIsOpen} />}
        </>
    );
};

export default AddTrip;