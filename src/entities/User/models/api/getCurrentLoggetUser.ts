import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { userActions, UserType } from '@/entities/User';
import { account } from '@/shared/api/config/appwriteClient';
import { rtkQuery } from '@/shared/api/rtkQuery';

export const getCurrentLoggetUser = rtkQuery.injectEndpoints({
    endpoints: (build) => ({
        getCurrentUser: build.query<UserType, void>({
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
    }),
});

export const { useLazyGetCurrentUserQuery } = getCurrentLoggetUser;
