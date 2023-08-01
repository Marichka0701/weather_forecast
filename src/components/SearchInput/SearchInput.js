import React from 'react';
import styles from './SearchInput.module.scss';
import searchIcon from './images/search-icon.png';

const SearchInput = ({setSearchCities}) => {
    // const [searchCities, setSearchCities] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setSearchCities(e.target.value);
    };

    // console.log(searchCities)

    return (
        <form className={styles.search}>
            <div>
                <input onChange={handleChange} type="text" placeholder='Search your trip'/>
                <img src={searchIcon} alt="search icon"/>
            </div>
        </form>
    );
}
export default SearchInput;