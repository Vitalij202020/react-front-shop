import React, {FormEvent, useState} from 'react';
import styles from './LoginPage.module.css';
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {Link} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const LoginPage = () => {
    const [form, setForm] = useState({email: '', password: ''})
    const {error} = useTypedSelector(state => state.userLogin)
    const {login} = useActions();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        login(form)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <Input
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        type="text"
                        placeholder="Enter Your Email"
                    />
                    <label >Password</label>
                    <Input
                        value={form.password}
                        onChange={e => setForm({...form, password: e.target.value})}
                        type="password"
                        placeholder="Enter Your Password"
                    />
                    <Button type='submit'>Login</Button>
                    {error && <p>{error}</p>}
                </form>
                <Link to='/forgetPassword'>Forgot password?</Link>
                <Link to='/register'>If you don't have a account?</Link>
            </div>
        </div>
    );
};

export default LoginPage;