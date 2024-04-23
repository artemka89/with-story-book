import { FC } from 'react';
import classNames from 'classnames';

import { getUserAuthData } from '@/entities/User';
import { useAppSelector } from '@/shared/lib/store';
import { HeaderTag } from '@/shared/ui/HeaderTag';

import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const authData = useAppSelector(getUserAuthData);
    authData;
    // const { data } = useGetUserProfileQuery(
    //     { userId: authData?.$id },
    //     { skip: !authData },
    // );

    // const [updateUserProfile, { isLoading, isSuccess }] =
    //     useUpdateUserProfileMutation();

    // if (!data) return;

    return (
        <main className={classNames(styles.profilePage, className)}>
            <HeaderTag textAlign="center">Профиль</HeaderTag>
            {/* <ProfileForm
                data={data}
                updateProfile={updateUserProfile}
                isLoading={isLoading}
                isSuccess={isSuccess}
            /> */}
        </main>
    );
};
