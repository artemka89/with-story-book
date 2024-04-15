import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReduser } from '@/entities/User/models/slice/userSlice';
import { rtkQuery } from '@/shared/api/rtkQuery';

const rootRecucer = combineReducers({
    [rtkQuery.reducerPath]: rtkQuery.reducer,
    user: userReduser,
});

export const store = configureStore({
    reducer: rootRecucer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rtkQuery.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
