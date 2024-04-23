import { FC } from 'react';
import classNames from 'classnames';

import styles from './Text.module.scss';

type TextSize = 'sm' | 'md' | 'lg';

interface TextProps {
    className?: string;
    children: React.ReactNode;
    size?: TextSize;
    textAlign?: 'left' | 'center' | 'right';
    isErrorColor?: boolean;
}

export const Text: FC<TextProps> = ({
    className,
    children,
    size = 'md',
    textAlign = 'left',
    isErrorColor = false,
}) => {
    const mods: Record<string, boolean> = {
        [styles.error]: isErrorColor,
    };

    return (
        <p
            className={classNames(
                className,
                styles.text,
                styles[size],
                styles[textAlign],
                mods,
            )}
        >
            {children}
        </p>
    );
};
