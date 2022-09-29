import React from 'react';
import Header from "../../components/UI/Header/Header";
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className='container'>
            <Header/>
            <main className={styles.main}>
                <div className={styles.greet}>
                    <h1>Welcome to this Shop</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi cupiditate, earum eligendi
                        exercitationem fugiat hic in inventore, iste laboriosam nisi porro provident quae quaerat repellat,
                        repellendus sed voluptate voluptatem!</p>
                </div>
            </main>
        </div>
    );
};

export default HomePage;