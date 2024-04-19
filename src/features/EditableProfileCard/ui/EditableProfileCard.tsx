import { FC } from 'react';
import classNames from 'classnames';

import { ProfileCard } from '@/entities/Profile';

import { useGetUserProfileQuery } from '../../ProfileForm/model/api/profileApi';

import styles from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
    id: string;
    className?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({
    id,
    className,
}) => {
    const { data } = useGetUserProfileQuery({ userId: id });

    return (
        <div className={classNames(styles.editableProfileCard, className)}>
            <ProfileCard onChangeUsername={() => {}} data={data} />
        </div>
    );
};
