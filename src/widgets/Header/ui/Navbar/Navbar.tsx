import { FC, HTMLAttributes } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Navbar.module.scss';

const NAVBAR_LINKS = [
    { name: 'Главная', path: '/' },
    { name: 'Меню', path: '/menu' },
    { name: 'О нас', path: '/about' },
    { name: 'Контакты', path: '/contact' },
];

type NavbarProps = HTMLAttributes<HTMLDivElement>;

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { pathname } = useLocation();

    return (
        <nav className={classNames(styles.navbar, className)}>
            {NAVBAR_LINKS.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={classNames(styles.link, {
                        [styles.active]: pathname === item.path,
                    })}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
};
