import {
    FormattedTrackInfo,
    SPOTIFY_RECENT_TRACKS_TYPES,
    SpotifyAccessToken,
    SpotifyClass,
    SpotifyNowListeningResponse,
    SpotifyRecentlyPlayedResponse,
} from "@/types/spotify";
import { fetch, Response } from "next/dist/compiled/@edge-runtime/primitives";

class Spotify implements SpotifyClass {
    static readonly ENDPOINTS = {
        NOW_PLAYING: "https://api.spotify.com/v1/me/player/currently-playing",
        RECENT_TRACKS: "https://api.spotify.com/v1/me/player/recently-played?limit=1",
        TOKEN: "https://accounts.spotify.com/api/token",
    };

    readonly CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
    readonly CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
    readonly REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

    readonly basic: string;

    constructor() {
        this.basic = Buffer.from(
            `${this.CLIENT_ID}:${this.CLIENT_SECRET}`
        ).toString("base64");
    }

    /**
     * 🔐 CODE ile ilk defa refresh_token ve access_token almak için
     */
    async getInitialTokensFromCode(code: string, redirectUri: string) {
        const response = await fetch(Spotify.ENDPOINTS.TOKEN, {
            method: "POST",
            headers: {
                Authorization: `Basic ${this.basic}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                code,
                redirect_uri: redirectUri,
            }),
        });

        const text = await response.text();

        try {
            const data = JSON.parse(text);
            return data;
        } catch (error) {
            throw new Error(`Response is not valid JSON: ${text}`);
        }
    }

    async getAccessToken(): Promise<SpotifyAccessToken> {
        if (!this.REFRESH_TOKEN) {
            throw new Error("No refresh token found. First, obtain it using authorization code.");
        }

        const response = await fetch(Spotify.ENDPOINTS.TOKEN, {
            method: "POST",
            headers: {
                Authorization: `Basic ${this.basic}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=refresh_token&refresh_token=${this.REFRESH_TOKEN}`,
            cache: "no-store",
        });

        const text = await response.text();
        const data = JSON.parse(text);

        return data;
    }

    async fetchWithAuth(url: string, options: RequestInit = {}): Promise<Response> {
        const { access_token } = await this.getAccessToken();
        return fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${access_token}`,
            },
            cache: "no-store",
        });
    }

    async getNowPlaying(): Promise<SpotifyNowListeningResponse | null> {
        const response = await this.fetchWithAuth(Spotify.ENDPOINTS.NOW_PLAYING);
        if (response.status === 204 || response.status >= 400) return null;
        return response.json();
    }

    async getRecentTrack(): Promise<SpotifyRecentlyPlayedResponse> {
        const response = await this.fetchWithAuth(Spotify.ENDPOINTS.RECENT_TRACKS);
        return response.json();
    }

    async getLastListened() {
        const nowPlaying = await this.getNowPlaying();
        if (nowPlaying) {
            return this.formatTrackInfo(nowPlaying.item, true);
        }
        const recentTrack = await this.getRecentTrack();
        return this.formatTrackInfo(recentTrack.items[0].track, false);
    }

    formatDuration(ms: number): string {
        try {
            const totalSeconds = Math.floor(ms / 1000);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            return `${minutes}m ${seconds}s`;
        } catch {
            return "";
        }
    }

    formatTrackInfo(track: any, isNowPlaying: boolean): FormattedTrackInfo {
        return {
            id: track.id,
            url: track.external_urls.spotify,
            artists: track.artists.map((i: { name: string }) => i.name),
            duration: this.formatDuration(track.duration_ms),
            song: track.name,
            count: 1,
            year: track.album.release_date.split("-")[0],
            img: track.album.images[0].url,
            isNowPlaying,
        };
    }

    flattenArray(musics: FormattedTrackInfo[]): FormattedTrackInfo[] {
        const uniqueMusics = new Map<string, FormattedTrackInfo & { count: number }>();
        musics.forEach((music) => {
            if (uniqueMusics.has(music.id)) {
                const existing = uniqueMusics.get(music.id)!;
                existing.count += 1;
            } else {
                uniqueMusics.set(music.id, { ...music, count: 1 });
            }
        });
        return Array.from(uniqueMusics.values());
    }

    async getLastListenedSongs(limit: SPOTIFY_RECENT_TRACKS_TYPES): Promise<FormattedTrackInfo[]> {
        const newUrl = new URL(Spotify.ENDPOINTS.RECENT_TRACKS);
        newUrl.searchParams.set("limit", limit.toString());
        const response = await this.fetchWithAuth(newUrl.toString());
        const parsedResponse = (await response.json()) as SpotifyRecentlyPlayedResponse;
        return parsedResponse.items.map((i) => this.formatTrackInfo(i.track, false));
    }
}


const spotify = new Spotify();

export default spotify;