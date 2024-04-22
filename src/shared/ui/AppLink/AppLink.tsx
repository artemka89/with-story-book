import { FC } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './AppLink.module.scss';

type AppLinkVariant = 'primary';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    to,
    variant = 'primary',
    ...props
}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(
                    styles.appLink,
                    styles[variant],
                    { [styles.active]: isActive },
                    className,
                )
            }
            {...props}
        ></NavLink>
    );
};
