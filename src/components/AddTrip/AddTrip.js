import React from 'react';

import styles from './AddTrip.module.scss';
import addIcon from './images/add-icon.png';
import Modal from "../Modal/Modal";

const AddTrip = ({modalOpen, setModalOpen, setTrigger}) => {
    const handleClick = () => {
        setModalOpen(true);
    };

    return (
        <>
            <div onClick={handleClick} className={styles.add_trip}>
                <img src={addIcon} alt="add icon"/>
                Add trip
            </div>
            {modalOpen && <Modal setTrigger={setTrigger} setModalOpen={setModalOpen} />}
        </>
    );
};

export default AddTrip;