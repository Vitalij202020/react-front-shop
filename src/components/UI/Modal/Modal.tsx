import React, {FC} from 'react';
import styles from './Modal.module.css';

interface ModalProps {
    active: boolean;
    setActive: (flag: boolean) => void;
    children: JSX.Element,
}

const Modal: FC<ModalProps> = ({active, setActive, children}) => {
    return (
        <div
            className={active ? `${styles.modal} ${styles.active}` : styles.modal}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? `${styles.modalContent} ${styles.active}` : styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>

    );
};

export default Modal;