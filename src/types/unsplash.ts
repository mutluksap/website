export interface PhotosResponse {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string | null;
    location: string;
    links: UserLinks;
    profile_image: ProfileImage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    total_illustrations: number;
    total_promoted_illustrations: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: SocialLinks;
    photos: Photo[];
    badge: unknown; // Eğer bu alan hep null ise: null
    tags: Tags;
    allow_messages: boolean;
    numeric_id: number;
    downloads: number;
    meta: {
        index: boolean;
    };
}

export interface UserLinks {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
}

export interface ProfileImage {
    small: string;
    medium: string;
    large: string;
}

export interface SocialLinks {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email: string | null;
}

export interface Photo {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    blur_hash: string;
    asset_type: string;
    urls: PhotoUrls;
}

export interface PhotoUrls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface Tags {
    custom: Tag[];
    aggregated: Tag[];
}

export interface Tag {
    type: string;
    title: string;
}
