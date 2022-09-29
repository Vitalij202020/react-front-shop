import React, {FC} from 'react';
import styles from "./User.module.css";
import {IUserWithDetails} from "../../../redux/types/userTypes";

interface UserProps {
    user: IUserWithDetails;
}

const User: FC<UserProps> = ({user}) => {
    return (
        <div className={styles.card}>
            <img
                src="https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png"
                alt="Avatar"
            />
            <div className={styles.container}>
                <h4><b>{`${user.firstName} ${user.lastName}`}</b></h4>
                <p>{user.email}</p>
                <p>Favorites Products: {user.favorites.length}</p>
                <p>Likes Products: {user.productLikes.length}</p>
                <p>Products In Cart: {user.cart.length}</p>
            </div>
        </div>
    );
};

export default User;