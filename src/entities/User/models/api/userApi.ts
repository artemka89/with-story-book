import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { userActions, UserType } from '@/entities/User';
import { account } from '@/shared/api/config/appwriteClient';
import { rtkQuery } from '@/shared/api/rtkQuery';

export const userApi = rtkQuery.injectEndpoints({
    endpoints: (build) => ({
        getCurrentLoggedUser: build.query<UserType, void>({
            queryFn: async () => {
                const cookieFallback = localStorage.getItem('cookieFallback');
                try {
                    if (!cookieFallback) return { data: null };
                    const user = await account.get();
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
        logOut: build.mutation<null, void>({
            queryFn: async () => {
                const cookieFallback = localStorage.getItem('cookieFallback');
                try {
                    if (!cookieFallback) return { data: null };
                    await account.deleteSessions();
                    return { data: null };
                } catch (error) {
                    return { error: error as FetchBaseQueryError };
                }
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                await queryFulfilled;
                dispatch(userActions.setUser(null));
            },
        }),
    }),
});

export const { useLazyGetCurrentLoggedUserQuery, useLogOutMutation } = userApi;
