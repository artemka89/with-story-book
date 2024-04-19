import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { DevTool } from '@hookform/devtools';
import classNames from 'classnames';

import { IProfile } from '@/entities/Profile';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { ProfileFormSchema } from '../model/types/profileSchema';

import styles from './ProfileForm.module.scss';

interface ProfileFormProps {
    className?: string;
    data: IProfile;
    isLoading: boolean;
    isSuccess: boolean;
    updateProfile: ({
        profileId,
        data,
    }: {
        profileId: string;
        data: ProfileFormSchema;
    }) => void;
}

export const ProfileForm: FC<ProfileFormProps> = ({
    className,
    data,
    isLoading,
    isSuccess,
    updateProfile,
}) => {
    const [readonly, setReadonly] = useState(true);
    const [avatarFile, setAvatarFile] = useState<File | undefined>(undefined);

    const filePickerRef = useRef<HTMLInputElement | null>(null);

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors, isDirty },
    } = useForm<ProfileFormSchema>({
        mode: 'onBlur',
        defaultValues: {
            username: data.username,
            email: data.email,
            phone: data.phone,
            city: data.city,
            address: data.address,
        },
    });

    const onSubmitHandler: SubmitHandler<ProfileFormSchema> = (formData) => {
        updateProfile({ profileId: data.$id, data: formData });
    };

    const onCancelEdit = () => {
        setReadonly(true);
        setAvatarFile(undefined);
        reset();
    };

    const onEditImage = () => {
        filePickerRef.current?.click();
    };

    const onChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setAvatarFile(file);
    };

    useEffect(() => {
        if (isSuccess) toast.success('Провиль успешно обнавлен');
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
                            avatarFile
                                ? URL.createObjectURL(avatarFile)
                                : data?.imageUrl
                        }
                        alt="avatar"
                    />
                    {!readonly && (
                        <div>
                            {data?.imageId ? (
                                <Button
                                    onClick={onEditImage}
                                    theme={ButtonTheme.OUTLINE}
                                >
                                    Изменить
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => {}}
                                    theme={ButtonTheme.OUTLINE}
                                >
                                    Загрузить
                                </Button>
                            )}
                            <input
                                ref={filePickerRef}
                                type="file"
                                onChange={onChangeAvatar}
                                accept="image/*,.png,.jpg,.web"
                                className={styles.hidden}
                            />
                        </div>
                    )}
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
                                readOnly={readonly}
                                className={classNames({
                                    [styles.profileReadonly]: readonly,
                                })}
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
                                readOnly={readonly}
                                className={classNames({
                                    [styles.profileReadonly]: readonly,
                                })}
                            />
                        )}
                    />
                    <Controller
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
                    />
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
                                readOnly={readonly}
                                className={classNames({
                                    [styles.profileReadonly]: readonly,
                                })}
                            />
                        )}
                    />
                    <Controller
                        name="address"
                        control={control}
                        rules={{ required: 'Улица обязательное поле' }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                label="Улица *"
                                error={errors.city?.message}
                                isClearButton={false}
                                readOnly={readonly}
                                className={classNames({
                                    [styles.profileReadonly]: readonly,
                                })}
                            />
                        )}
                    />
                    {readonly ? (
                        <Button
                            onClick={() => setReadonly(false)}
                            fullWidth
                            isLoading={isLoading}
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
