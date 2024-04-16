import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

import { useAuthByEmailMutation } from '../model/api/authApi';

import styles from './SigninForm.module.scss';

interface SigninFormProps {
    className?: string;
}

export const SigninForm: FC<SigninFormProps> = ({ className }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [authByEmail, { isLoading }] = useAuthByEmailMutation();

    const onChangeEmail = (value: string) => {
        setEmail(value);
    };
    const onChangePassword = (value: string) => {
        setPassword(value);
    };

    const onLoginClick = async () => {
        await authByEmail({ email, password });
        setEmail('');
        setPassword('');
        navigate('/');
    };

    return (
        <div className={classNames(styles.signinForm, className)}>
            <Input value={email} onChange={onChangeEmail} placeholder="Email" />
            <Input
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder="Пароль"
            />
            <Button
                isLoading={isLoading}
                onClick={onLoginClick}
                className={styles.button}
            >
                Войти
            </Button>
        </div>
    );
};
