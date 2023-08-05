import React from 'react';
import {Link} from "react-router-dom";

import styles from './Header.module.scss';
import {UserAuth} from "../../context/AuthContextProvider";

const Header = () => {
    const {user, logOut} = UserAuth();
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <header className={styles.header}>
            <h1>Weather <span>Forecast</span></h1>
            <div>
                {
                    user ?
                        <>
                            <div className={styles.user_info}>
                                <img src={user.photoURL} alt={user.displayName}/>
                                <button onClick={handleSignOut}>Logout</button>
                            </div>
                        </> :
                        <Link to='/sign-in'>
                            <button className={styles.sign_in}>Sign in</button>
                        </Link>
                }
            </div>
        </header>
    );
};

export default Header;