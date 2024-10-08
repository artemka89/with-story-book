import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    UNDERLINE = 'underline',
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
            className={classNames(
                [styles.button, styles[theme], styles[radius]],
                {
                    [styles.isLoading]: isLoading,
                    [styles.disabled]: disabled,
                    [styles.fullWidth]: fullWidth,
                },
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};
