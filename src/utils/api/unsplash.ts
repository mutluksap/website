class Unsplash {
    async getData(url: string) {
        try {
            const res = await fetch(url, {
                method: "GET",
            });
            return await res.json();
        } catch (error) {
            return error;
        }
    }

    getImages() {
        const url = `https://api.unsplash.com/users/mutluksap/photos?client_id=${process.env.UNSPLASH_CLIENT_ID}&per_page=30&page=1`;
        return this.getData(url);
    }
}

const unsplash = new Unsplash();

export default unsplash;