import { FC } from 'react';
import classNames from 'classnames';

import { SigninForm } from '@/features/SigninForm';

import styles from './SigninPage.module.scss';

interface SigninPageProps {
    className?: string;
}

export const SigninPage: FC<SigninPageProps> = ({ className }) => {
    return (
        <section className={classNames(styles.signinPage, className)}>
            <h2>Авторизация</h2>
            <SigninForm />
        </section>
    );
};
