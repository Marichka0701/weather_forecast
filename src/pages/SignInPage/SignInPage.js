import React, {useEffect, useState} from 'react';
import GoogleButton from 'react-google-button';

import styles from './SignInPage.module.scss';
import {useNavigate} from "react-router-dom";
import {UserAuth} from "../../context/AuthContextProvider";
import back from './images/arrow-back.png';

const SignInPage = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const handleGoogleSignIn = async () => {
        setError(false)
        try {
            await googleSignIn();
        } catch (error) {
            setError(true);
            console.error(error);
        }
    };

    useEffect(() => {
        if (user !== null) {
            navigate('/');
        }
    }, [user]);

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className={styles.sign_in_page_container}>
            <img onClick={handleClick} src={back} alt="arrow back"/>

            <div className={styles.sign_in_page}>
                <h1>Sign in</h1>
                <GoogleButton onClick={handleGoogleSignIn}/>
            </div>

            {
                error && <h1>Something went wrong...Please, refresh the page and try again</h1>
            }
        </div>
    );
};

export default SignInPage;