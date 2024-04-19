import toast from 'react-hot-toast';
import {
    combineReducers,
    configureStore,
    isRejectedWithValue,
    Middleware,
} from '@reduxjs/toolkit';

import { AppwiteErrorType } from '@/app/types/appriteError';
import { userReduser } from '@/entities/User/models/slice/userSlice';
import { rtkQuery } from '@/shared/api/rtkQuery';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        const customError = action.payload as AppwiteErrorType;
        if (customError.code === 0) {
            toast.error('Соединение отсутсвует');
        }
        if (customError.code === 401) {
            toast.error(
                'Неверные учетные данные. Пожалуйста, проверьте электронную почту и пароль.',
            );
        }
        if (customError.code === 400) {
            toast.error(
                ' Неверный параметр «email»: значение должно быть действительным адресом электронной почты.',
            );
        }
    }
    return next(action);
};

const rootRecucer = combineReducers({
    [rtkQuery.reducerPath]: rtkQuery.reducer,
    user: userReduser,
});

export const store = configureStore({
    reducer: rootRecucer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(rtkQuery.middleware)
            .concat(rtkQueryErrorLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
