import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { AppRoutes } from '@/shared/constants/router';
import { useAppSelector } from '@/shared/lib/store';

import { getUserAuthData } from '../../models/selectors/getUserAuthData/getUserAuthData';

import styles from './UserGreeting.module.scss';

interface UserGreetingProps {
    className?: string;
    userId: string;
}

export const UserGreeting: FC<UserGreetingProps> = ({ className }) => {
    const user = useAppSelector(getUserAuthData);

    const userData = user?.name ? user.name : user?.email;
    return (
        <div className={classNames(styles.userGreeting, className)}>
            Привет,{' '}
            <Link to={AppRoutes.PROFILE} className={styles.profileLink}>
                {userData}
            </Link>
        </div>
    );
};
