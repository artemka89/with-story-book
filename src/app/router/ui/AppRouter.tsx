import { memo, Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import { routerConfig } from '@/app/router/config/routerConfig';
import { Header } from '@/widgets/Header';

export const AppRouter = memo(() => {
    const renderWithSuspense = useCallback((route: RouteProps) => {
        const element = <Suspense fallback="">{route.element}</Suspense>;
        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return (
        <div className="container">
            <Header />
            <Routes>
                {Object.values(routerConfig).map(renderWithSuspense)}
            </Routes>{' '}
        </div>
    );
});
