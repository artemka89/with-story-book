import { Models } from 'appwrite';

export type UserType = Models.User<Models.Preferences> | null;

export interface UserSchema {
    authData: UserType;
}
