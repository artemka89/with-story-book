import { FC } from 'react';
import classNames from 'classnames';

import { SignupForm } from '@/features/SignupForm/ui/SignupForm';

import styles from './SignupPage.module.scss';

interface SigninPageProps {
    className?: string;
}

export const SignupPage: FC<SigninPageProps> = ({ className }) => {
    return (
        <section className={classNames(styles.signupPage, className)}>
            <h2>Регистрация</h2>
            <SignupForm />
        </section>
    );
};
