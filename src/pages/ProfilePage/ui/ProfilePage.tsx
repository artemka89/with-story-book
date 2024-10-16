import { FC } from 'react';
import classNames from 'classnames';

import { getUserAuthData } from '@/entities/User';
import { ProfileForm, useGetUserProfileQuery } from '@/features/ProfileForm';
import { IProfile } from '@/shared/api/appwriteApi';
import { useAppSelector } from '@/shared/lib/store';
import { HeaderTag } from '@/shared/ui/HeaderTag';
import { PageLoader } from '@/shared/ui/PageLoader';

import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const authData = useAppSelector(getUserAuthData);

    const { data, isLoading } = useGetUserProfileQuery(authData?.$id, {
        skip: !authData,
    });

    if (isLoading || !authData || !data) return <PageLoader />;

    const profileData: IProfile = {
        ...data,
        username: authData.name,
        email: authData.email,
        imageId: data.imageId,
        imageUrl: data.imageUrl,
        city: data.city,
        street: data.street,
        phone: authData.phone,
    };

    return (
        <main className={classNames(styles.profilePage, className)}>
            <HeaderTag textAlign="center">Профиль</HeaderTag>
            <ProfileForm data={profileData} />
        </main>
    );
};
