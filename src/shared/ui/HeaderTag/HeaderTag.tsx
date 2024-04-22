import { FC } from 'react';
import classNames from 'classnames';

import styles from './HeaderTag.module.scss';

type HeaderTagType = 'h1' | 'h2' | 'h3';
type TextSize = 'sm' | 'md' | 'lg';
type TextAlign = 'left' | 'center' | 'right';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    sm: 'h1',
    md: 'h2',
    lg: 'h3',
};

interface TextProps {
    className?: string;
    children: React.ReactNode;
    size?: TextSize;
    textAlign?: TextAlign;
}

export const HeaderTag: FC<TextProps> = ({
    className,
    size = 'md',
    textAlign = 'left',
    children,
}) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(className, styles.headerTag)}>
            <HeaderTag
                className={classNames(
                    styles.headers,
                    styles[size],
                    styles[textAlign],
                )}
            >
                {children}
            </HeaderTag>
        </div>
    );
};
