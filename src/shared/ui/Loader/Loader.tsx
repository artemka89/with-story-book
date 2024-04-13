import { CSSProperties, FC, useMemo } from 'react';
import classNames from 'classnames';

import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
    size?: number;
}

export const Loader: FC<LoaderProps> = ({ className, size = 28 }) => {
    const style = useMemo<CSSProperties>(
        () => ({
            height: size,
            width: size,
        }),
        [size],
    );

    return (
        <div className={classNames(styles.loaderWrapper, className)}>
            <span className={styles.loader} style={style}></span>
        </div>
    );
};
