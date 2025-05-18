import Image from "next/image";

const NowPlaying = ({ song }) => {
    if (!song) return null;

    const { album, name, external_urls } = song.item;
    const artists = album.artists.map((artist) => artist.name).join(", ");

    return (
        <div className="flex">
            <span className="font-bold">Playing Now:</span>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={external_urls.spotify}
                className="underline underline-offset-2 flex gap-2 ml-2"
            >
                <Image
                    className="rounded-full animate-spin border border-neutral-500 shrink-0"
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