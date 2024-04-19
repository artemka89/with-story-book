import { CSSProperties, FC, useMemo } from 'react';
import classNames from 'classnames';

import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt: string;
}

export const Avatar: FC<AvatarProps> = ({ className, src, alt, size }) => {
    const styleSize = useMemo<CSSProperties>(
        () => ({
            width: size || 98,
            height: size || 98,
        }),
        [size],
    );
    return (
        <div className={classNames(styles.avatar, className)} style={styleSize}>
            <img src={src} alt={alt} />
        </div>
    );
};
