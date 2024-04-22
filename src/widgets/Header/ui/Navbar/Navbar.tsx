import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { AppLink } from '@/shared/ui/AppLink';

import styles from './Navbar.module.scss';

const NAVBAR_LINKS = [
    { name: 'Главная', path: '/' },
    { name: 'Меню', path: '/menu' },
    { name: 'О нас', path: '/about' },
    { name: 'Контакты', path: '/contact' },
];

type NavbarProps = HTMLAttributes<HTMLDivElement>;

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <nav className={classNames(styles.navbar, className)}>
            {NAVBAR_LINKS.map((item) => (
                <AppLink key={item.path} to={item.path}>
                    {item.name}
                </AppLink>
            ))}
        </nav>
    );
};
