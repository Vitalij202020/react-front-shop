import React, {FormEvent, useState} from 'react';
import styles from './Header.module.css';
import {BiSearch} from 'react-icons/bi';
import {BiLogOut} from 'react-icons/bi';
import {NavLink} from "react-router-dom";
import {useActions} from "../../../hooks/useActions";
import {menu} from "../../../constants/menu";
import {ProductApi} from "../../../constants/productApi";

const Header = () => {
    const [value, setValue] = useState('')
    const {logout, getProductList} = useActions();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        getProductList(ProductApi.PRODUCT_LIST_BY_SEARCH, value)
    }

    function logoutHandler() {
        logout()
    }

    return (
        <div className={styles.topNav}>
            <div className={styles.links}>
                {
                    menu.map(item => (
                        <NavLink
                            end
                            key={item.title}
                            className={({isActive}) => isActive ? styles.active : ''}
                            to={item.to}
                        >
                            {item.title}
                        </NavLink>
                    ))
                }
            </div>
            <div className={styles.searchContainer}>
                <form onSubmit={handleSubmit}>
                    <input
                        value={value}
                        type="text"
                        placeholder="Search.."
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button type="submit"><BiSearch size='1.2em'/></button>
                </form>
            </div>
            <div className={styles.logout}>
                <button onClick={logoutHandler}><BiLogOut/>Logout</button>
            </div>
        </div>
    );
};

export default Header;