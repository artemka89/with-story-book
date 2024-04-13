import { memo, Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import { routerConfig } from '@/app/providers/router/config/routerConfig';

export const AppRouter = memo(() => {
    const renderWithSuspense = useCallback((route: RouteProps) => {
        const element = <Suspense fallback="">{route.element}</Suspense>;
        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return (
        <Routes>{Object.values(routerConfig).map(renderWithSuspense)}</Routes>
    );
});
