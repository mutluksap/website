import Wrapper from '@/components/Wrapper'
import Project from './Project'
import SectionTitle from "@/components/SectionTitle";
import {Repo} from "@/types/github";

type Props = {
    repos: Repo[];
};

const Projects = (props: Props) => (
  <section>
    <Wrapper>
      <SectionTitle title="Projects" href={'/projects'} />
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {props.repos.map((repository) => (
          <Project repo={repository} key={repository.name} />
        ))}
      </div>
    </Wrapper>
  </section>
)

export default Projects
