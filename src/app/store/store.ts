import toast from 'react-hot-toast';
import {
    combineReducers,
    configureStore,
    isRejectedWithValue,
    Middleware,
} from '@reduxjs/toolkit';

import { AppwriteErrorType } from '@/app/types/appwriteError';
import { userReducer } from '@/entities/User/models/slice/userSlice';
import { rtkQuery } from '@/shared/api/rtkQuery';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        const customError = action.payload as AppwriteErrorType;
        if (customError.code === 0) {
            toast.error('Соединение отсутствует');
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

const rootReducer = combineReducers({
    [rtkQuery.reducerPath]: rtkQuery.reducer,
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(rtkQuery.middleware)
            .concat(rtkQueryErrorLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
