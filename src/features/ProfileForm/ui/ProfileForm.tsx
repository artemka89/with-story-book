import { FC, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { DevTool } from '@hookform/devtools';
import classNames from 'classnames';

import { IProfile } from '@/shared/api/appwriteApi';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button } from '@/shared/ui/Button';
import { FileInput } from '@/shared/ui/FileInput';
import { Input } from '@/shared/ui/Input';

import { useUpdateUserProfileMutation } from '../api/profileApi';
import { ProfileFormSchema } from '../model/types/profileSchema';

import styles from './ProfileForm.module.scss';

interface ProfileFormProps {
    className?: string;
    data: IProfile;
}

export const ProfileForm: FC<ProfileFormProps> = ({ className, data }) => {
    const [readonly, setReadonly] = useState(true);

    const [updateProfile, { isLoading, isSuccess }] =
        useUpdateUserProfileMutation();

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isDirty },
        getValues,
    } = useForm<ProfileFormSchema>({
        mode: 'onBlur',
        defaultValues: {
            username: data.username,
            email: data.email,
            // phone: data.phone,
            city: data.city,
            street: data.street,
            imageFile: [],
        },
    });

    const getImageFileUrl = () => {
        const imageFile = getValues('imageFile');
        if (imageFile && imageFile.length > 0) return imageFile[0];
    };

    const imageUrl = getImageFileUrl();

    const onSubmitHandler: SubmitHandler<ProfileFormSchema> = async (
        formData,
    ) => {
        await updateProfile({
            ...formData,
            id: data.$id,
            imageId: data.imageId || '',
            imageUrl: data.imageUrl || '',
        });
        setReadonly(true);
    };

    const onCancelEdit = () => {
        setReadonly(true);
        reset();
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success('Пользователь успешно обновлен');
        } else {
            reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className={classNames(styles.profileForm, className)}
            >
                <div className={styles.profileFIleInputsWrapper}>
                    <Avatar
                        src={
                            imageUrl
                                ? URL.createObjectURL(imageUrl)
                                : data?.imageUrl
                        }
                        alt="avatar"
                    />
                    <FileInput
                        {...register('imageFile')}
                        className={classNames({
                            [styles.hidden]: readonly,
                        })}
                    />
                </div>
                <div className={styles.profileInputsWrapper}>
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
                                readonly={readonly}
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
                                readonly
                            />
                        )}
                    />
                    {/* <Controller
                        name="phone"
                        control={control}
                        rules={{ required: 'Телефон обязательное поле' }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                label="Телефон *"
                                error={errors.phone?.message}
                                isClearButton={false}
                                readOnly={readonly}
                                className={classNames({
                                    [styles.profileReadonly]: readonly,
                                })}
                            />
                        )}
                    /> */}
                    <Controller
                        name="city"
                        control={control}
                        rules={{ required: 'Город обязательное поле' }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                label="Город *"
                                error={errors.city?.message}
                                isClearButton={false}
                                readonly={readonly}
                            />
                        )}
                    />
                    <Controller
                        name="street"
                        control={control}
                        rules={{ required: 'Улица обязательное поле' }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                label="Улица *"
                                error={errors.street?.message}
                                isClearButton={false}
                                readonly={readonly}
                            />
                        )}
                    />
                    {readonly ? (
                        <Button
                            onClick={() => setReadonly(false)}
                            fullWidth
                            isLoading={false}
                            type="submit"
                        >
                            Редактировать
                        </Button>
                    ) : (
                        <div className={styles.isEdit}>
                            <Button fullWidth onClick={onCancelEdit}>
                                Отменить
                            </Button>
                            <Button
                                fullWidth
                                isLoading={isLoading}
                                disabled={!isDirty}
                                type="submit"
                            >
                                Сохранить
                            </Button>
                        </div>
                    )}
                </div>
            </form>
            <DevTool control={control} />
        </>
    );
};
