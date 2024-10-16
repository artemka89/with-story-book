import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

import { App } from './app/App.tsx';
import { StoreProvider } from './app/providers/StoreProvider/index.tsx';

import './app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
