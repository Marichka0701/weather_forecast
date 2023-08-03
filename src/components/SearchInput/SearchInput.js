import React from 'react';
import styles from './SearchInput.module.scss';
import searchIcon from './images/search-icon.png';
import SortButton from "../SortButton/SortButton";

const SearchInput = ({setSearchCities, setTrigger}) => {
    const handleChange = (e) => {
        e.preventDefault();
        setSearchCities(e.target.value);
    };

    return (
        <div className={styles.search_container}>
            <form className={styles.search}>
                <div>
                    <input onChange={handleChange} type="text" placeholder='Search your trip'/>
                    <img src={searchIcon} alt="search icon"/>
                </div>
            </form>
            <SortButton setTrigger={setTrigger}/>
        </div>
    );
}
export default SearchInput;