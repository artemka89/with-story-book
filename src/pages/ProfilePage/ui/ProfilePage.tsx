import { FC } from 'react';
import classNames from 'classnames';

import { getUserAuthData } from '@/entities/User';
import { useGetUserProfileQuery } from '@/features/EditableProfileCard';
import { useUpdateUserProfileMutation } from '@/features/ProfileForm/model/api/profileApi';
import { ProfileForm } from '@/features/ProfileForm/ui/ProfileForm';
import { useAppSelector } from '@/shared/lib/store';

import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const authData = useAppSelector(getUserAuthData);

    const { data } = useGetUserProfileQuery(
        { userId: authData?.$id },
        { skip: !authData },
    );

    const [updateUserProfile, { isLoading, isSuccess }] =
        useUpdateUserProfileMutation();

    if (!data) return;

    return (
        <main className={classNames(styles.profilePage, className)}>
            <h2>Профиль</h2>
            <ProfileForm
                data={data}
                updateProfile={updateUserProfile}
                isLoading={isLoading}
                isSuccess={isSuccess}
            />
        </main>
    );
};
