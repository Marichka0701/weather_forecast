import React from 'react';
import styles from './SearchInput.module.scss';
import searchIcon from './images/search-icon.png';

const SearchInput = () => {
    return (
        <form className={styles.search}>
            <div>
                <input type="text" placeholder='Search your trip'/>
                <img src={searchIcon} alt="search icon"/>
            </div>
        </form>
    );
};

export default SearchInput;