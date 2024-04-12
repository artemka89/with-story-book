import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
}

export type ButtonTheme2 = 'clear' | 'outline' | 'background';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    theme?: ButtonTheme;
    backgroundColor?: string;
}

export const Button: FC<ButtonProps> = ({
    children,
    theme = ButtonTheme.BACKGROUND,
    backgroundColor,
    className,
    ...props
}) => {
    return (
        <button
            type="button"
            className={classNames([styles.button, styles[theme], className])}
            style={{ backgroundColor }}
            {...props}
        >
            {children}
        </button>
    );
};
