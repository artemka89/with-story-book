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

    async createUserAccount(credentials: INewUser): Promise<IUser> {
        const newUser = await this.account.create(
            ID.unique(),
            credentials.email,
            credentials.password,
            credentials.username,
        );
        return newUser as IUser;
    }

    async createEmailSession(credentials: {
        email: string;
        password: string;
    }): Promise<Models.Session> {
        const session = await this.account.createEmailSession(
            credentials.email,
            credentials.password,
        );
        return session;
    }

    async getCurrentUser(): Promise<IUser> {
        const user = await this.account.get();

        return user as IUser;
    }

    getUserAvatar(username: string) {
        const avatar = this.avatars.getInitials(username);
        return avatar;
    }

    async logout(): Promise<void> {
        await this.account.deleteSession('current');
        return;
    }

    async updateUserEmail({
        email,
        password,
    }: {
        email: string;
        password: string;
    }): Promise<IUser> {
        const user = await this.account.updateEmail(email, password);
        return user as IUser;
    }

    async updateUserPassword({
        currentPassword,
        oldPassword,
    }: {
        currentPassword: string;
        oldPassword: string;
    }): Promise<IUser> {
        const user = await this.account.updatePassword(
            currentPassword,
            oldPassword,
        );
        return user as IUser;
    }

    async updateUsername(username: string): Promise<IUser> {
        const user = await this.account.updateName(username);
        return user as IUser;
    }

    async updateUserPhone({
        phone,
        password,
    }: {
        phone: string;
        password: string;
    }): Promise<IUser> {
        const user = await this.account.updatePhone(phone, password);
        return user as IUser;
    }

    async createUserProfile({
        userId,
        data,
    }: {
        userId: string;
        data: INewProfile;
    }): Promise<IProfile> {
        const newProfile = await this.database.createDocument(
            appwriteConfig.DatabaseId,
            appwriteConfig.ProfilesCollectionId,
            userId,
            data,
        );

        return newProfile as IProfile;
    }

    async getUserProfile(userId: string): Promise<IProfile> {
        const profile = await this.database.getDocument(
            appwriteConfig.DatabaseId,
            appwriteConfig.ProfilesCollectionId,
            userId,
        );

        return profile as IProfile;
    }

    async updateUserProfile({
        id,
        data,
    }: {
        id: string;
        data: INewProfile;
    }): Promise<IProfile> {
        const newProfile = await this.database.updateDocument(
            appwriteConfig.DatabaseId,
            appwriteConfig.ProfilesCollectionId,
            id,
            data,
        );

        return newProfile as IProfile;
    }

    async createAvatarImage(imageFile: File): Promise<Models.File> {
        const newImage = await this.createFile(
            appwriteConfig.BucketAvatarsId,
            imageFile,
        );

        return newImage;
    }

    async deleteAvatarImage(imageId: string): Promise<void> {
        await this.deleteFile(appwriteConfig.BucketAvatarsId, imageId);
        return;
    }

    getAvatarPreview(imageId: string): string {
        const url = this.getImagePreview(
            appwriteConfig.BucketAvatarsId,
            imageId,
            500,
            500,
        );
        return url;
    }

    private async createFile(
        bucketId: string,
        file: File,
    ): Promise<Models.File> {
        const newFile = await this.storage.createFile(
            bucketId,
            ID.unique(),
            file,
        );
        return newFile;
    }

    private async deleteFile(bucketId: string, fileId: string): Promise<void> {
        await this.storage.deleteFile(bucketId, fileId);
        return;
    }

    private getImagePreview(
        bucketId: string,
        imageId: string,
        width?: number,
        height?: number,
        quality?: number,
    ): string {
        const url = this.storage.getFilePreview(
            bucketId,
            imageId,
            width,
            height,
            undefined,
            quality || 100,
        );
        return url.toString();
    }
}

export const appwriteApi = new AppwriteApi();
