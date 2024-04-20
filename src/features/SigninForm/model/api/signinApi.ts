import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { userActions } from '@/entities/User';
import { appwriteApi, IUser } from '@/shared/api/appwriteApi';
import { rtkQuery } from '@/shared/api/rtkQuery';

import { SigninSchema } from '../types/SigninSchema';

export const signinApi = rtkQuery.injectEndpoints({
    endpoints: (build) => ({
        authByEmail: build.mutation<IUser | undefined, SigninSchema>({
            queryFn: async ({ email, password }) => {
                try {
                    const session = await appwriteApi.createEmailSession({
                        email,
                        password,
                    });

                    if (!session) return { data: undefined };

                    const user = await appwriteApi.getCurrentUser();

                    if (!user) {
                        await appwriteApi.logout();
                        return { data: undefined };
                    }

                    return { data: user };
                } catch (error) {
                    return { error: error as FetchBaseQueryError };
                }
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                if (data) {
                    dispatch(userActions.setUser(data));
                }
            },
        }),
    }),
});

export const { useAuthByEmailMutation } = signinApi;
