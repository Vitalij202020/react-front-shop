import React, {FormEvent, useState} from 'react';
import styles from './RolesPage.module.css';
import Header from "../../components/UI/Header/Header";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const RolesPage = () => {
    const {error} = useTypedSelector(state => state.userAddRole);
    const [form, setForm] = useState({value: '', userId: ''});
    const {addUserRole} = useActions();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        addUserRole({...form, userId: parseInt(form.userId)})
    }

    return (
        <div className='container'>
            <Header/>
            <main className={styles.main}>
                <div className={styles.box}>
                    <h2>Add Role To User</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Role Name</label>
                        <Input
                            value={form.value}
                            onChange={e => setForm({...form, value: e.target.value})}
                            type="text"
                            placeholder="Enter Role Name"
                        />

                        <label>User ID</label>
                        <Input
                            value={form.userId}
                            onChange={e => setForm({...form, userId: e.target.value})}
                            type="text"
                            placeholder="Enter User ID"
                        />
                        <Button type='submit'>Add Role To User</Button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </main>
        </div>
    );
};

export default RolesPage;