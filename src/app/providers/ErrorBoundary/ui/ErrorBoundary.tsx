import { ErrorBoundary as Error } from 'react-error-boundary';

import { ErrorPage } from '@/pages/ErrorPage';

export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
    return <Error fallback={<ErrorPage />}>{children}</Error>;
};
