import classNames from 'classnames';

import { AppRouter } from '@/app/providers/router/ui/AppRouter';
import { useTheme } from '@/shared/lib/hooks/useTheme';

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', [theme])}>
            <div className="container">
                <AppRouter />
            </div>
        </div>
    );
};
