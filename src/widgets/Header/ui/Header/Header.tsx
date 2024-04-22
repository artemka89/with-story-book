import { FC } from 'react';
import { Link } from 'react-router-dom';

import { getUserAuthData, useLazyLogoutQuery } from '@/entities/User';
import { UserGreeting } from '@/entities/User/';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { AppRoutes } from '@/shared/constants/router';
import { useAppSelector } from '@/shared/lib/store';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Logo } from '@/shared/ui/Logo';

import { Navbar } from '../Navbar/Navbar';

import styles from './Header.module.scss';

export const Header: FC = () => {
    const [logout, { isLoading }] = useLazyLogoutQuery();

    const userData = useAppSelector(getUserAuthData);

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <Logo />

                <div className={styles.navWrapper}>
                    <Navbar />
                    {userData ? (
                        <div className={styles.controlWrapper}>
                            <UserGreeting userId={userData.$id} />
                            <Button
                                isLoading={isLoading}
                                onClick={() => logout()}
                            >
                                Выйти
                            </Button>
                            <ThemeSwitcher size={24} />
                        </div>
                    ) : (
                        <div className={styles.controlWrapper}>
                            <Link to={AppRoutes.SIGN_IN}>
                                <Button theme={ButtonTheme.UNDERLINE}>
                                    Войти
                                </Button>
                            </Link>
                            <Link to={AppRoutes.SIGN_UP}>
                                <Button>Регистрация</Button>
                            </Link>
                            <ThemeSwitcher size={24} />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
