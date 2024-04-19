import { FC } from 'react';

import { getUserAuthData } from '@/entities/User';
import { SignupForm } from '@/features/SignupForm/ui/SignupForm';
import { useAppSelector } from '@/shared/lib/store';

export const MainPage: FC = () => {
    const user = useAppSelector(getUserAuthData);

    if (!user) return 'Пользователь не найден';
    return (
        <>
            Main Page
            <SignupForm />
        </>
    );
};
