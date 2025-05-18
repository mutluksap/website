import Biography from "@/app/home/components/Biography";
import Projects from "@/app/home/components/Projects";
import {Repo} from "@/types/github";
import github from "@/utils/api/github";


const Home = async () => {
    const repos: Repo[] = await github.getRepos();
    return <main>
        <Biography />
        <Projects repos={repos} />
    </main>
}

export default Home;