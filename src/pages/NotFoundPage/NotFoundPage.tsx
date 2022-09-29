import React from 'react';
import styles from './NotFoundPage.module.css';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.fof}>
                    <h1>Error 404</h1>
                    <p>
                        <Link to='/'>Back to Home</Link>
                    </p>
                </div>
            </div>
            <Link to='/'>Back to Home</Link>

        </div>
    );
};

export default NotFoundPage;