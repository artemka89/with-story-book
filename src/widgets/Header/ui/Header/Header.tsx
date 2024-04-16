import { FC } from 'react';
import { Link } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User/models/selectors/getUserAuthData/getUserAuthData';
import { UserGreeting } from '@/entities/User/ui/UserGreeting/UserGreeting';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { AppRoutes } from '@/shared/constants/router';
import { useAppSelector } from '@/shared/lib/store';
import { Button } from '@/shared/ui/Button/Button';
import { Logo } from '@/shared/ui/Logo';

import { Navbar } from '../Navbar/Navbar';

import styles from './Header.module.scss';

export const Header: FC = () => {
    const userData = useAppSelector(getUserAuthData);

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <Logo />

                <div className={styles.navWrapper}>
                    <Navbar />
                    {userData ? (
                        <div className={styles.controlWrapper}>
                            <UserGreeting />
                            <Button>Выйти</Button>
                            <ThemeSwitcher size={24} />
                        </div>
                    ) : (
                        <div className={styles.controlWrapper}>
                            <Link to={AppRoutes.SIGN_IN}>
                                <Button>Войти</Button>
                            </Link>
                            <ThemeSwitcher size={24} />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
