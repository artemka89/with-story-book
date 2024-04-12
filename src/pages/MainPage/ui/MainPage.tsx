import { FC } from 'react';

import { BugButton } from '@/app/providers/ErrorBoundary/ui/BagButton';
import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/ThemeSwitcher';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

export const MainPage: FC = () => {
    const { toggleTheme } = useTheme();

    return (
        <div>
            <div>Главная страница</div>
            <Button theme={ButtonTheme.OUTLINE} onClick={toggleTheme}>
                Click
            </Button>
            <BugButton />
            <br />
            <ThemeSwitcher />
        </div>
    );
};
