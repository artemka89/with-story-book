import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import { Loader } from '../Loader';

import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    FILLED = 'filled',
}

type Radius = 'normal' | 'full';

type HTMLButtonProps = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'disabled'
>;

interface ButtonProps extends HTMLButtonProps {
    children: React.ReactNode;
    theme?: ButtonTheme;
    radius?: Radius;
    fullWidth?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
    children,
    type = 'button',
    theme = ButtonTheme.FILLED,
    radius = 'normal',
    fullWidth = false,
    disabled = false,
    isLoading = false,
    className,
    ...props
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={classNames([
                styles.button,
                styles[theme],
                styles[radius],
                {
                    [styles.isLoading]: isLoading,
                    [styles.disabled]: disabled,
                    [styles.fullWidth]: fullWidth,
                },
                className,
            ])}
            {...props}
        >
            {isLoading && <Loader className={styles.loader} />}
            {children}
        </button>
    );
};
