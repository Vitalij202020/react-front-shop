import React, {FormEvent, useState} from 'react';
import styles from "./RegisterPage.module.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {Link} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const RegisterPage = () => {
    const [form, setForm] = useState({firstName: '', lastName: '', email: '', password: ''})
    const {error} = useTypedSelector(state => state.userLogin)
    const {register} = useActions();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        register(form)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <Input
                        value={form.firstName}
                        onChange={e => setForm({...form, firstName: e.target.value})}
                        type="text"
                        placeholder="Enter Your Name"
                    />

                    <label>Last Name</label>
                    <Input
                        value={form.lastName}
                        onChange={e => setForm({...form, lastName: e.target.value})}
                        type="text"
                        placeholder="Enter Your Surname"
                    />


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

                    {/*<label >Confirm Password</label>*/}
                    {/*<Input*/}
                    {/*    value={form.confirmPassword}*/}
                    {/*    onChange={e => setForm({...form, confirmPassword: e.target.value})}*/}
                    {/*    type="password"*/}
                    {/*    placeholder="Confirm Your Password"*/}
                    {/*/>*/}
                    <Button type='submit'>Register</Button>
                    {error && <p>{error}</p>}
                </form>
                <Link to='/login'>Already have account?</Link>
            </div>
        </div>
    );
};

export default RegisterPage;