import Home from "@/app/home/page";
import github from "@/utils/api/github";
import {Repo} from "@/types/github";

const Index = async () =>  {
  const repos: Repo[] = await github.getRepos();
  return (
      <Home repos={repos} />
  );
}

export default Index;
