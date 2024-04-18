import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import classNames from 'classnames';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { useCreateAccountMutation } from '../model/api/signupApi';
import { SignupSchema } from '../model/types';

import styles from './SignupForm.module.scss';

interface SignupFormProps {
    className?: string;
}

export const SignupForm: FC<SignupFormProps> = ({ className }) => {
    const [createAccount, { isLoading }] = useCreateAccountMutation();

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SignupSchema>({
        mode: 'onBlur',
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<SignupSchema> = (data) => createAccount(data);
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
                <Button
                    isLoading={isLoading}
                    type="submit"
                    className={styles.button}
                >
                    Создать
                </Button>
            </form>
            <DevTool control={control} />
        </>
    );
};
