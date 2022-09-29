import React, {useEffect} from 'react';
import Header from "../../components/UI/Header/Header";
import styles from "./UsersPage.module.css";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import User from "../../components/user/User/User";

const UsersPage = () => {
    const {users} = useTypedSelector(state => state.userList)
    const {getAllUsers} = useActions();

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div className='container'>
            <Header/>
            <main className={styles.main}>
                {
                    users?.map(user => (
                        <User key={user.id} user={user}/>
                    ))
                }
            </main>
        </div>
    );
};

export default UsersPage;