import { FC } from 'react';
import classNames from 'classnames';

import { HeaderTag } from '../HeaderTag';
import { Loader } from '../Loader';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <main className={classNames(styles.pageLoader, className)}>
            <HeaderTag textAlign="center">Загрузка...</HeaderTag>
            <Loader size={48} />
        </main>
    );
};
