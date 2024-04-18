import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { ID } from 'appwrite';

import { userActions, UserType } from '@/entities/User';
import { account } from '@/shared/api/config/appwriteClient';
import { rtkQuery } from '@/shared/api/rtkQuery';

import { SignupSchema } from '../types';

export const signupApi = rtkQuery.injectEndpoints({
    endpoints: (build) => ({
        createAccount: build.mutation<UserType, SignupSchema>({
            queryFn: async ({ email, password, username }) => {
                try {
                    const newUser = await account.create(
                        ID.unique(),
                        email,
                        password,
                        username,
                    );
                    return { data: newUser };
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

export const { useCreateAccountMutation } = signupApi;
