import Wrapper from "@/components/Wrapper";
import PageTitle from "@/components/PageTitle";
import WhoAmI from "@/app/about/WhoAmI";
import Online from "@/app/about/Online";
import Experience from "@/app/about/Experience";

export const metadata = {
    title: 'About me',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        url: '/about',
    },
}

const About = () => (
    <Wrapper>
        <main>
            <PageTitle title="About me" />
            <WhoAmI />
            <Online />
            <Experience />
        </main>
    </Wrapper>
)

export default About
