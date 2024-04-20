import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Models,
    Storage,
} from 'appwrite';

import { appwriteConfig } from './appwriteConfig';
import { INewProfile, INewUser, IProfile, IUser } from './types';

class AppwriteApi {
    private client = new Client();
    private account: Account;
    private database: Databases;
    private storage: Storage;
    private avatars: Avatars;

    constructor() {
        this.client
            .setEndpoint(appwriteConfig.Url)
            .setProject(appwriteConfig.ProjectId);
        this.account = new Account(this.client);
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
        this.avatars = new Avatars(this.client);
    }

    async createUserAccount(newUser: INewUser): Promise<IUser> {
        const user = await this.account.create(
            ID.unique(),
            newUser.email,
            newUser.password,
            newUser.username,
        );

        // const avatar = this.avatars.getInitials(newUser.username);
        return user as IUser;
    }

    async createEmailSession(credentioals: {
        email: string;
        password: string;
    }): Promise<Models.Session> {
        const session = await this.account.createEmailSession(
            credentioals.email,
            credentioals.password,
        );

        return session;
    }

    async getCurrentUser(): Promise<IUser> {
        const user = await this.account.get();
        return user as IUser;
    }

    async checkAuthUser(): Promise<IUser> {
        const user = await this.account.get();
        return user as IUser;
    }

    async logout(): Promise<void> {
        await this.account.deleteSession('current');
        return;
    }

    async createUserProfile(newProfile: INewProfile): Promise<IProfile> {
        const profile = await this.database.createDocument(
            appwriteConfig.DatabaseId,
            appwriteConfig.UsersCollectionId,
            ID.unique(),
            newProfile,
        );

        return profile as IProfile;
    }
}

export const appwriteApi = new AppwriteApi();
