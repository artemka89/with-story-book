/// <reference types="vite/client" />

declare module '*.svg?react' {
    const src: string;
    export default src;
}

declare type RootState = import('../store/store').RootState;

declare type AppDispatch = import('../store/store').AppDispatch;
