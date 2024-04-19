import { Query } from 'appwrite';

import { IProfile } from '@/entities/Profile';
import { database } from '@/shared/api/config/appwriteClient';
import { appwriteConfig } from '@/shared/api/config/appwriteConfig';
import { rtkQuery } from '@/shared/api/rtkQuery';

import { ProfileFormSchema } from '../types/profileSchema';

export const profileApi = rtkQuery.injectEndpoints({
    endpoints: (build) => ({
        getUserProfile: build.query<IProfile, { userId: string | undefined }>({
            queryFn: async ({ userId }) => {
                if (!userId)
                    return {
                        error: {
                            status: 500,
                            data: "Coin landed on it's edge!",
                        },
                    };
                const { documents } = await database.listDocuments(
                    appwriteConfig.DatabaseId,
                    appwriteConfig.UsersCollectionId,
                    [Query.equal('accountId', userId)],
                );

                return { data: documents[0] as IProfile };
            },
            providesTags: ['Profile'],
        }),
        updateUserProfile: build.mutation<
            IProfile,
            { profileId: string; data: ProfileFormSchema }
        >({
            queryFn: async ({ profileId, data }) => {
                const document = await database.updateDocument(
                    appwriteConfig.DatabaseId,
                    appwriteConfig.UsersCollectionId,
                    profileId,
                    data,
                );

                if (document) {
                    return { data: document as IProfile };
                }
                return {
                    error: {
                        status: 500,
                        data: "Coin landed on it's edge!",
                    },
                };
            },
            invalidatesTags: ['Profile'],
        }),
    }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } =
    profileApi;
