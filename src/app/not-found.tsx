import Link from "next/link";

import PageTitle from "@/components/PageTitle";
import Wrapper from "@/components/Wrapper";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/photos", label: "Photos" },
  { href: "/projects", label: "Projects" }
];

const Error404 = () => (
  <Wrapper>
    <div className="sm:py-10">
      <PageTitle title="Are you lost?" />
      <h2 className="pb-4 text-xl">
        The page you are looking for doesn&#39;t exist.
      </h2>
      <h3 className="text-lg">Here are some helpful links instead:</h3>
      <ul className="list-inside list-disc px-4 py-8 text-lg underline underline-offset-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <h4 className="text-lg font-extrabold">Error code: 404</h4>
    </div>
  </Wrapper>
);

export default Error404;
