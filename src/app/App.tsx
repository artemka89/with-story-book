import { useEffect } from 'react';
import classNames from 'classnames';

import { AppRouter } from '@/app/router/ui/AppRouter';
import { useLazyGetCurrentUserQuery } from '@/entities/User/models/api/getCurrentLoggetUser';
import { useTheme } from '@/shared/lib/hooks/useTheme';

export const App = () => {
    const { theme } = useTheme();

    const [getCurrentUserTrigger] = useLazyGetCurrentUserQuery();

    useEffect(() => {
        getCurrentUserTrigger();
    }, [getCurrentUserTrigger]);

    return (
        <div className={classNames('app', [theme])}>
            <AppRouter />
        </div>
    );
};
