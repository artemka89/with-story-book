import { Models } from 'appwrite';

export interface INewUser {
    username: string;
    email: string;
    password: string;
}

export type IUser = Models.User<Models.Preferences>;

export interface INewProfile {
    accountId: string;
    username: string;
    email: string;
    phone: string;
    city: string;
    street: string;
    imageId: string;
    imageUrl: URL;
}

export type IProfile = Models.Document & INewProfile;
