import { Models } from 'appwrite';

export interface IProfile extends Models.Document {
    username: string;
    email: string;
    imageId: string;
    imageUrl: string;
    postalCode: string;
    city: string;
    address: string;
    phone: string;
}
