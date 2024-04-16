import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { useAppSelector } from '@/shared/lib/store';

import { getUserAuthData } from '../../models/selectors/getUserAuthData/getUserAuthData';

import styles from './UserGreeting.module.scss';

interface UserGreetingProps {
    className?: string;
}

export const UserGreeting: FC<UserGreetingProps> = ({ className }) => {
    const user = useAppSelector(getUserAuthData);

    const userData = user?.name ? user.name : user?.email;
    return (
        <div className={classNames(styles.userGreeting, className)}>
            Привет,{' '}
            <Link to={'/profile'} className={styles.profileLink}>
                {userData}
            </Link>
        </div>
    );
};
