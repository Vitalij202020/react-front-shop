import React, {FormEvent, useState} from 'react';
import styles from './ProfilePage.module.css';
import Header from "../../components/UI/Header/Header";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ProfilePage = () => {
    const {userInfo} = useTypedSelector(state => state.userLogin);
    const {error} = useTypedSelector(state => state.userUpdate);
    const [form, setForm] = useState({
        firstName: userInfo?.firstName,
        lastName: userInfo?.lastName,
        email: userInfo?.email
    });
    const {updateUser} = useActions();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        updateUser({
            firstName: form.firstName || '',
            lastName: form.lastName || '',
            email: form.email || ''
        })
    }

    return (
        <div className='container'>
            <Header/>
            <main className={styles.main}>
                <div className={styles.box}>
                    <h2>Profile Page</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Your First Name</label>
                        <Input
                            value={form?.firstName}
                            onChange={e => setForm({...form, firstName: e.target.value})}
                            type="text"
                            placeholder="Enter Your Name"
                        />

                        <label>Your Last Name</label>
                        <Input
                            value={form?.lastName}
                            onChange={e => setForm({...form, lastName: e.target.value})}
                            type="text"
                            placeholder="Enter Your Surname"
                        />

                        <label>Your Email</label>
                        <Input
                            value={form?.email}
                            onChange={e => setForm({...form, email: e.target.value})}
                            type="text"
                            placeholder="Enter Your Email"
                        />
                        <Button type='submit'>Submit Changes</Button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;