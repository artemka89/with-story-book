import { FC } from 'react';
import { IoClose } from 'react-icons/io5';
import classNames from 'classnames';

import { Button, ButtonTheme } from '../Button';
import { Portal } from '../Portal';

import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
    className,
    children,
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                onClick={onClose}
                className={classNames(styles.overlay, {
                    [styles.isOpen]: isOpen,
                })}
            >
                <div
                    onClick={(event) => event.stopPropagation()}
                    className={classNames(styles.modal, {
                        [styles.isOpen]: isOpen,
                    })}
                >
                    <Button
                        onClick={onClose}
                        theme={ButtonTheme.CLEAR}
                        className={styles.closeButton}
                    >
                        <IoClose size={32} />
                    </Button>
                    <div className={className}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
