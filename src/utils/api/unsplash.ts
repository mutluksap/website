class Unsplash {
    async getData(url: string) {
        try {
            const res = await fetch(url, {
                method: "GET",
            });
            return await res.json();
        } catch (e) {
            return null;
        }
    }

    getImages() {
        const url = `https://api.unsplash.com/users/mutluksap/?client_id=${process.env.UNSPLASH_CLIENT_ID}`;
        return this.getData(url);
    }
}

const unsplash = new Unsplash();

export default unsplash;