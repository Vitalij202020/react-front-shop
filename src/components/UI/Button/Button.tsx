import React, {FC} from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    onClick?: () => void;
    type?: string;
    children: string,
}

const Button: FC<ButtonProps> = ({children, onClick, type}) => {
    return (
        <button
            onClick={onClick}
            className={styles.btn}
        >
            {children}
        </button>
    );
};

export default Button;