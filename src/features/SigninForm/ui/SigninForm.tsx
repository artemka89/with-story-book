import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { DevTool } from '@hookform/devtools';
import classNames from 'classnames';

import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

import { useAuthByEmailMutation } from '../model/api/signinApi';
import { SigninSchema } from '../model/types/SigninSchema';

import styles from './SigninForm.module.scss';

interface SigninFormProps {
    className?: string;
}

export const SigninForm: FC<SigninFormProps> = ({ className }) => {
    const navigate = useNavigate();

    const [authByEmail, { status }] = useAuthByEmailMutation();

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<SigninSchema>({
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmitHandler: SubmitHandler<SigninSchema> = ({
        email,
        password,
    }) =>
        authByEmail({ email, password })
            .unwrap()
            .then(() => {
                navigate('/');
                reset();
                toast.success('Вход успешно выполнен');
            });

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className={classNames(styles.signinForm, className)}
            >
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: 'Email обязательное поле' }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Email *"
                            error={errors.email?.message}
                            isClearButton={false}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: 'Пароль обязательное поле' }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Пароль *"
                            error={errors.password?.message}
                            isClearButton={false}
                            type="password"
                        />
                    )}
                />
                <Button
                    isLoading={status === 'pending'}
                    type="submit"
                    className={styles.button}
                >
                    Войти
                </Button>
            </form>
            <DevTool control={control} />
        </>
    );
};
