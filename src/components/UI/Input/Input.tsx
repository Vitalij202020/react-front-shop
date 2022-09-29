import React, {ChangeEvent, FC} from 'react';
import styles from './Input.module.css';

interface InputProps {
    value: string | number | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder: string;
}

const Input: FC<InputProps> = (props) => {
    return (
        <input className={styles.sInput} {...props}/>
    );
};

export default Input;