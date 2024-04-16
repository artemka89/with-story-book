import { useEffect } from 'react';
import classNames from 'classnames';

import { AppRouter } from '@/app/router/ui/AppRouter';
import { useLazyGetCurrentLoggedUserQuery } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme';

export const App = () => {
    const { theme } = useTheme();

    const [getCurrentUserTrigger] = useLazyGetCurrentLoggedUserQuery();

    useEffect(() => {
        getCurrentUserTrigger();
    }, [getCurrentUserTrigger]);

    return (
        <div className={classNames('app', [theme])}>
            <AppRouter />
        </div>
    );
};
