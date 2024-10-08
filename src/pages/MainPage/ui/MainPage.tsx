import { FC } from 'react';
import classNames from 'classnames';

import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/Button';
import { HeaderTag } from '@/shared/ui/HeaderTag';

import styles from './MainPage.module.scss';

interface MainPageProps {
    className: string;
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
    return (
        <main className={classNames(className)}>
            <section className={styles.hero}>
                <div className={styles.heroInfo}>
                    <div className="">
                        <HeaderTag size="lg">МОЯ ПИЦЦА -</HeaderTag>
                        <HeaderTag>Самая вкусная пицца во вселенной</HeaderTag>
                        <p className={styles.heroText}>
                            Пицца — это недостающий кусочек, который делает
                            каждый день полноценным, простая, но вкусная радость
                            в жизни.
                        </p>
                        <div className={styles.heroButton}>
                            <Button>Заказать</Button>
                            <Button theme={ButtonTheme.OUTLINE}>
                                Узнать больше
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img src="/pizza.png" alt="pizza" />
                </div>
            </section>
        </main>
    );
};
