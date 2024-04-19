import { RouteProps } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage/ui/MainPage';
import { ProfilePage } from '@/pages/ProfilePage/ui/ProfilePage';
import { SignupPage } from '@/pages/SignupPage';
import { SigninPage } from '@/pages/SinginPage';
import {
    AppRoutes,
    getRouteProfile,
    getRouteSignIn,
    getRouteSignUp,
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
    [AppRoutes.SIGN_UP]: {
        path: getRouteSignUp(),
        element: <SignupPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(),
        element: <ProfilePage />,
    },

    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <div>Not Found</div>,
    },
};
