import Image from "next/image";
import { Track } from "@/types/spotify";
import React from "react";

type NowPlayingProps = {
    song: Track | null | undefined;
};

const NowPlaying: React.FC<NowPlayingProps> = ({ song }) => {
    if (!song) return null;
    const { album, name, external_urls } = song;
    const artists = album.artists.map((artist) => artist.name).join(", ");

    return (
        <div className="flex gap-4 items-center px-1 pt-4 text-sm text-neutral-500">
            <span className="font-bold">Playing Now:</span>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={external_urls.spotify}
                className="underline underline-offset-2 flex gap-2 ml-2 items-center"
            >
                <Image
                    className="rounded-full animate-spin border border-neutral-500 flex-shrink-0"
                    width={20}
                    height={20}
                    src={album.images[2].url}
                    alt={name}
                />
                {artists} - {name}
            </a>
        </div>
    );
};

export default NowPlaying;
