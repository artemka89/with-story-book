import { FC } from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '@/shared/assets/icon/logo.svg?react';

import styles from './Logo.module.scss';

export const Logo: FC = () => {
    return (
        <Link to="/" className={styles.logo}>
            <LogoImg />
            <div className={styles.text}>
                <span className={styles.title}>МОЯ ПИЦЦА</span>
                <span className={styles.description}>
                    самая вкусная во вселенной
                </span>
            </div>
        </Link>
    );
};
