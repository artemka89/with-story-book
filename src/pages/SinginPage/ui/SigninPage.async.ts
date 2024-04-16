import { lazy } from 'react';

const SigninPageAsync = lazy(() =>
    import('./SigninPage').then((module) => ({
        default: module.SigninPage,
    })),
);

export default SigninPageAsync;
