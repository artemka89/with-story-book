import { ChangeEvent, FC, useRef, useState } from 'react';
import { LuUpload } from 'react-icons/lu';
import classNames from 'classnames';

import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

import { IProfile } from '../../model/types/profile';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: IProfile;
    avatarFile?: File;
    onChangeUsername?: (value: string) => void;
    onChangeEmail?: (value: string) => void;
    onChangePhone?: (value: string) => void;
    onChangeStreet?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangePostalCode?: (value: string) => void;
    onSaveData?: (id?: string) => void;
    onChangeAvatar?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
    className,
    data,
    avatarFile,
    onChangeUsername,
    onChangeEmail,
    onChangePhone,
    onChangeStreet,
    onChangeCity,
    onChangePostalCode,
    onChangeAvatar,
    onSaveData,
}) => {
    const [readonly, setReadonly] = useState(true);

    const onEdit = () => {
        setReadonly(false);
    };

    const onCancel = () => {
        setReadonly(true);
    };

    const readonlyStyle = readonly ? styles.readonly : undefined;

    const filePicker = useRef<HTMLInputElement | null>(null);

    const onLoadHandle = () => {
        filePicker.current?.click();
    };

    return (
        <div className={classNames(styles.profileCard, className)}>
            <div className={styles.profileCardItem}>
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
                                onClick={onLoadHandle}
                                theme={ButtonTheme.OUTLINE}
                            >
                                Изменить
                            </Button>
                        ) : (
                            <Button
                                onClick={onLoadHandle}
                                theme={ButtonTheme.OUTLINE}
                            >
                                <LuUpload size={20} />
                            </Button>
                        )}
                    </div>
                )}

                <input
                    ref={filePicker}
                    type="file"
                    onChange={onChangeAvatar}
                    accept="image/*,.png,.jpg,.web"
                    className={styles.hidden}
                />
            </div>
            <div className={styles.profileCardWrapper}>
                <Input
                    className={readonlyStyle}
                    readOnly={readonly}
                    isClearButton={false}
                    value={data?.username}
                    onChange={onChangeUsername}
                    placeholder="Имя"
                />
                <Input
                    className={readonlyStyle}
                    readOnly={readonly}
                    isClearButton={false}
                    value={data?.email}
                    onChange={onChangeEmail}
                    placeholder="Email"
                />
                <Input
                    className={readonlyStyle}
                    readOnly={readonly}
                    isClearButton={false}
                    value={data?.phone}
                    onChange={onChangePhone}
                    placeholder="Телефон"
                />
                <Input
                    className={readonlyStyle}
                    readOnly={readonly}
                    isClearButton={false}
                    value={data?.address}
                    onChange={onChangeStreet}
                    placeholder="Улица"
                />

                <div className={styles.profileCardWrapperItem}>
                    <Input
                        className={readonlyStyle}
                        readOnly={readonly}
                        isClearButton={false}
                        value={data?.city}
                        onChange={onChangeCity}
                        placeholder="Город"
                    />
                    <Input
                        className={readonlyStyle}
                        readOnly={readonly}
                        isClearButton={false}
                        value={data?.postalCode}
                        onChange={onChangePostalCode}
                        placeholder="Индекс"
                    />
                </div>
                {readonly ? (
                    <Button onClick={onEdit}>Редактировать</Button>
                ) : (
                    <div className={styles.isEdit}>
                        <Button className={styles.btn} onClick={onCancel}>
                            Отменить
                        </Button>
                        <Button
                            className={styles.btn}
                            onClick={() => onSaveData?.(data?.imageId)}
                        >
                            Сохранить
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
