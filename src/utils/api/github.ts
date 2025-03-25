class Github {

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

    getRepos() {
        const url = "https://api.github.com/users/mutluksap/repos";
        return this.getData(url);
    }
}

const github = new Github();

export default github;