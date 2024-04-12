import { RouteProps } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage/ui/MainPage';
import { AppRoutes, getRoutMain } from '@/shared/constants/router';

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRoutMain(),
        element: <MainPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <div>Not Found</div>,
    },
};
