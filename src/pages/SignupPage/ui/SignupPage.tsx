import { FC } from 'react';
import classNames from 'classnames';

import { SignupForm } from '@/features/SignupForm/ui/SignupForm';
import { HeaderTag } from '@/shared/ui/HeaderTag';

import styles from './SignupPage.module.scss';

interface SigninPageProps {
    className?: string;
}

export const SignupPage: FC<SigninPageProps> = ({ className }) => {
    return (
        <section className={classNames(styles.signupPage, className)}>
            <HeaderTag textAlign="center">Регистрация</HeaderTag>
            <SignupForm />
        </section>
    );
};
