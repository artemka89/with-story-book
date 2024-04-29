import { Models } from 'appwrite';

export interface INewUser {
    username: string;
    email: string;
    password: string;
}

export type IUser = Models.User<Models.Preferences>;

export interface INewProfile {
    city?: string;
    street?: string;
    imageId?: string;
    imageUrl?: string;
}

export type IProfile = Models.Document & INewProfile;
