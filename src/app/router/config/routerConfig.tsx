import { RouteProps } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage/ui/MainPage';
import { SigninPage } from '@/pages/SinginPage';
import {
    AppRoutes,
    getRouteSignIn,
    getRoutMain,
} from '@/shared/constants/router';

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRoutMain(),
        element: <MainPage />,
    },
    [AppRoutes.SIGN_IN]: {
        path: getRouteSignIn(),
        element: <SigninPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <div>Not Found</div>,
    },
};
