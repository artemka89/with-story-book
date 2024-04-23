import { FC } from 'react';
import classNames from 'classnames';

import { SigninForm } from '@/features/SigninForm';
import { HeaderTag } from '@/shared/ui/HeaderTag';

import styles from './SigninPage.module.scss';

interface SigninPageProps {
    className?: string;
}

export const SigninPage: FC<SigninPageProps> = ({ className }) => {
    return (
        <section className={classNames(styles.signinPage, className)}>
            <HeaderTag size="lg" textAlign="center">
                Авторизация
            </HeaderTag>
            <SigninForm />
        </section>
    );
};
