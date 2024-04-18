import { lazy } from 'react';

const SignupPageAsync = lazy(() =>
    import('./SignupPage').then((module) => ({
        default: module.SignupPage,
    })),
);

export default SignupPageAsync;
