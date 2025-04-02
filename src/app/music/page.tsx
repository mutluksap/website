import spotify from "@/utils/api/spotify";

const Music = async () => {
    const tokens: any = await spotify.getRecentlyPlayedTracks()
    console.log(tokens)
    return "Music";
}

export default Music