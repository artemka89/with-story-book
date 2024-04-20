import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { appwriteApi, IUser } from '@/shared/api/appwriteApi';
import { rtkQuery } from '@/shared/api/rtkQuery';

import { SignupSchema } from '../types';

export const signupApi = rtkQuery.injectEndpoints({
    endpoints: (build) => ({
        createAccount: build.mutation<IUser, SignupSchema>({
            queryFn: async ({ email, password, username }) => {
                try {
                    const account = await appwriteApi.createUserAccount({
                        username,
                        email,
                        password,
                    });
                    return { data: account };
                } catch (error) {
                    return { error: error as FetchBaseQueryError };
                }
            },
        }),
    }),
});

export const { useCreateAccountMutation } = signupApi;
