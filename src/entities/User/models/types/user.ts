import { Models } from 'appwrite';

export type UserType = Models.User<Models.Preferences>;

export interface UserSchema {
    authData: UserType | null;
}
