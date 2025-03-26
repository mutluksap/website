type AlternativeSlugs = {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    ko: string;
    de: string;
    pt: string;
};

type Urls = {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
};

type Links = {
    self: string;
    html: string;
    download: string;
    download_location: string;
};

type TopicSubmissions = {
    nature?: { status: string };
    wallpapers?: { status: string };
};

type ProfileImage = {
    small: string;
    medium: string;
    large: string;
};

type Social = {
    instagram_username?: string;
    portfolio_url?: string | null;
    twitter_username?: string | null;
    paypal_email?: string | null;
};

type User = {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string | null;
    portfolio_url: string | null;
    bio: string;
    location: string;
    links: Links;
    profile_image: ProfileImage;
    instagram_username?: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    total_illustrations: number;
    total_promoted_illustrations: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
};

type Photo = {
    id: string;
    slug: string;
    alternative_slugs: AlternativeSlugs;
    created_at: string;
    updated_at: string;
    promoted_at: string | null;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string | null;
    alt_description: string;
    breadcrumbs: any[];
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship: any | null;
    topic_submissions: TopicSubmissions;
    asset_type: string;
    user: User;
};