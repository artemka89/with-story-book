export const appwriteConfig = {
    Url: import.meta.env.VITE_APPWRITE_URL,
    ProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    DatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    ProfilesCollectionId: import.meta.env.VITE_APPWRITE_PROFILES_COLLECTION_ID,

    PizzasCollectionId: import.meta.env.VITE_APPWRITE_PIZZAS_COLLECTION_ID,

    CateroriesCollectionId: import.meta.env
        .VITE_APPWRITE_CATEGORIES_COLLECTION_ID,

    OptionsCollectionId: import.meta.env.VITE_APPWRITE_OPTIONS_COLLECTION_ID,

    BucketImagesId: import.meta.env.VITE_APPWRITE_BUCKET_IMAGES_ID,
    BucketAvatarsId: import.meta.env.VITE_APPWRITE_BUCKET_AVATARS_ID,
};
