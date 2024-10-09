import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';

const Mockstore = (initialState: {
    authData: { $id: string; email: string; name: string } | null;
}) => {
    const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {},
    });

    return configureStore({
        reducer: { user: userSlice.reducer },
    });
};

export const StoreDecoratorWithOutAuth: Decorator = (Story) => {
    return (
        <Provider store={Mockstore({ authData: null })}>
            <Story />
        </Provider>
    );
};

export const StoreDecoratorWithAuth: Decorator = (Story) => (
    <Provider
        store={Mockstore({
            authData: {
                email: 'LjJpS@example.com',
                $id: '1',
                name: 'name',
            },
        })}
    >
        <Story />
    </Provider>
);
