import { Metadata } from "next";
import github from "@/utils/api/github";
import Wrapper from "@/components/Wrapper";
import PageTitle from "@/components/PageTitle";
import Stats from "@/app/projects/Stats";
import Repositories from "@/app/projects/Repositories";

export const metadata: Metadata = {
    title: 'Projects',
    alternates: {
        canonical: '/projects',
    },
    openGraph: {
        url: '/projects',
    },
};

const Projects = async () =>  {
    const data = await getData()
    console.log(data)
    return     <main>
        <Wrapper>
            <PageTitle title="Projects" />
            <Stats
                followers={data.userInformation.followers}
                following={data.userInformation.following}
            />
            <Repositories repositories={data.repositories} />
        </Wrapper>
    </main>
};



const getData = async () => {
    const repositories = await github.getRepos();
    const userInformation = await github.getUserInfo();

    return {
        repositories,
        userInformation
    };
}

export default Projects;