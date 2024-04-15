import { Account, Avatars, Client, Databases, Storage } from 'appwrite';

import { appwriteConfig } from './appwriteConfig';

const client = new Client()
    .setEndpoint(appwriteConfig.Url)
    .setProject(appwriteConfig.ProjectId);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
