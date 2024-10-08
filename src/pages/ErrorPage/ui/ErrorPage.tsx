import { FC } from 'react';

import { Button } from '@/shared/ui/Button/Button';

import styles from './ErrorPage.module.scss';

export const ErrorPage: FC = () => {
    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={styles.errorPage}>
            <h3>Возникла непредвиденная ошибка</h3>
            <Button onClick={reloadPage}>Обновить страницу</Button>
        </div>
    );
};
