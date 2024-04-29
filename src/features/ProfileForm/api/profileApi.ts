import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { appwriteApi, INewProfile, IProfile } from '@/shared/api/appwriteApi';
import { rtkQuery } from '@/shared/api/rtkQuery';

import { ProfileFormSchema } from '../model/types/profileSchema';

export const profileApi = rtkQuery.injectEndpoints({
    endpoints: (build) => ({
        getUserProfile: build.query<IProfile, string | undefined>({
            queryFn: async (userId) => {
                try {
                    if (!userId)
                        return {
                            error: {
                                status: 0,
                                data: 'Пользователь не найден',
                            },
                        };
                    const profile = await appwriteApi.getUserProfile(userId);

                    return { data: profile };
                } catch (error) {
                    return { error: error as FetchBaseQueryError };
                }
            },
            providesTags: ['Profile'],
        }),
        updateUserProfile: build.mutation<IProfile, ProfileFormSchema>({
            queryFn: async (data) => {
                try {
                    const prevImageId = data.imageId;

                    let image = {
                        imageId: data.imageId,
                        imageUrl: data.imageUrl,
                    };

                    if (data.imageFile.length > 0) {
                        const newImage = await appwriteApi.createAvatarImage(
                            data.imageFile[0],
                        );

                        const imageUrl = appwriteApi.getAvatarPreview(
                            newImage.$id,
                        );

                        if (imageUrl) {
                            image = {
                                ...image,
                                imageId: newImage.$id,
                                imageUrl,
                            };
                        }
                    }

                    const profile: INewProfile = {
                        city: data.city,
                        street: data.street,
                        imageId: image.imageId,
                        imageUrl: image.imageUrl,
                    };

                    const newProfile = await appwriteApi.updateUserProfile({
                        id: data.id,
                        data: profile,
                    });

                    if (prevImageId && newProfile) {
                        await appwriteApi.deleteAvatarImage(data.imageId);
                    }

                    console.log(prevImageId, newProfile.imageId);
                    return { data: newProfile };
                } catch (error) {
                    return { error: error as FetchBaseQueryError };
                }
            },
            invalidatesTags: ['Profile'],
        }),
    }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } =
    profileApi;
