import Biography from "@/app/home/components/Biography";
import Projects from "@/app/home/components/Projects";
import {Repo} from "@/types/github";

type Props = {
    repos: Repo[]
}

export default function Home(props: Props) {
    return <main>
        <Biography />
        <Projects repos={props.repos} />
    </main>
}