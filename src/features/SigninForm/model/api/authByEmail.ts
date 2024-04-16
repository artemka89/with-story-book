import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { userActions, UserType } from '@/entities/User';
import { account } from '@/shared/api/config/appwriteClient';
import { rtkQuery } from '@/shared/api/rtkQuery';

import { SigninSchema } from '../types/SigninSchema';

export const authByEmail = rtkQuery.injectEndpoints({
    endpoints: (build) => ({
        auth: build.mutation<UserType, SigninSchema>({
            queryFn: async ({ email, password }) => {
                try {
                    const session = await account.createEmailSession(
                        email,
                        password,
                    );
                    if (!session) return { data: null };
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

export const { useAuthMutation } = authByEmail;
