import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { userActions } from '@/entities/User';
import { appwriteApi, IUser } from '@/shared/api/appwriteApi';
import { rtkQuery } from '@/shared/api/rtkQuery';
import { localStorageKeys } from '@/shared/constants/localStorageKeys';

export const userApi = rtkQuery.injectEndpoints({
    endpoints: (build) => ({
        getCurrenUser: build.query<IUser | null, void>({
            queryFn: async () => {
                try {
                    const cookieFallback = localStorage.getItem(
                        localStorageKeys.SESSION_COOKIE,
                    );
                    if (cookieFallback === '[]') return { data: null };
                    const user = await appwriteApi.getCurrentUser();
                    return { data: user };
                } catch (error) {
                    return { error: error as FetchBaseQueryError };
                }
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(userActions.setUser(data));
            },
        }),
        logOut: build.query<null, void>({
            queryFn: async () => {
                try {
                    await appwriteApi.logout();
                    return { data: null };
                } catch (error) {
                    return { error: error as FetchBaseQueryError };
                }
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(userActions.setUser(data));
            },
        }),
    }),
});

export const { useLazyGetCurrenUserQuery, useLazyLogOutQuery } = userApi;
