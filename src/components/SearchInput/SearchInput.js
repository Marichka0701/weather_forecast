import React from 'react';
import styles from './SearchInput.module.scss';
import searchIcon from './images/search-icon.png';

const SearchInput = () => {
    return (
        <form className={styles.search}>
            <input type="text"/>
        </form>
    );
};

export default SearchInput;