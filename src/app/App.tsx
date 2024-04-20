import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import classNames from 'classnames';

import { AppRouter } from '@/app/router/ui/AppRouter';
import { useLazyGetCurrenUserQuery } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme';

export const App = () => {
    const { theme } = useTheme();

    const [getCurrentUserTrigger] = useLazyGetCurrenUserQuery();

    useEffect(() => {
        getCurrentUserTrigger();
    }, [getCurrentUserTrigger]);

    return (
        <div className={classNames('app', [theme])}>
            <AppRouter />
            <Toaster />
        </div>
    );
};
