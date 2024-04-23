import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { DevTool } from '@hookform/devtools';
import classNames from 'classnames';

import { getRouteSignIn } from '@/shared/constants/router';
import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

import { SignupSchema } from '../model/types';
import { useCreateAccountMutation } from '..';

import styles from './SignupForm.module.scss';

interface SignupFormProps {
    className?: string;
}

export const SignupForm: FC<SignupFormProps> = ({ className }) => {
    const navigate = useNavigate();

    const [createAccount, { isLoading }] = useCreateAccountMutation();

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<SignupSchema>({
        mode: 'onBlur',
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<SignupSchema> = async (data) => {
        await createAccount(data)
            .unwrap()
            .then(() => {
                navigate(getRouteSignIn());
                reset();
                toast.success('Аккаунт успешно создан');
            });
    };
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classNames(styles.signupForm, className)}
            >
                <Controller
                    name="username"
                    control={control}
                    rules={{ required: 'Имя обязательное поле' }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Имя *"
                            error={errors.username?.message}
                            isClearButton={false}
                        />
                    )}
                />
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
                <div className={styles.footer}>
                    <div className={styles.footerWrapper}>
                        <Text>Уже есть аккаунта?</Text>
                        <AppLink to={getRouteSignIn()} className={styles.link}>
                            Войти
                        </AppLink>
                    </div>
                    <Button
                        isLoading={isLoading}
                        type="submit"
                        className={styles.button}
                    >
                        Создать
                    </Button>
                </div>
            </form>
            <DevTool control={control} />
        </>
    );
};
