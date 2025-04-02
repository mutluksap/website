import JobPosition from './Job'
import SectionTitle from "@/components/SectionTitle";

export type Job = {
  company: { link: string; logo: string; name: string }
  positions: {
    dateFinish: string | null
    dateStart: string
    title: string
  }[]
}

const work: Job[] = [
  {
    company: {
      link: 'https://next4biz.com',
      logo: '/images/companies/next4biz.webp',
      name: 'Next4biz',
    },
    positions: [
      {
        dateFinish: null,
        dateStart: '05/09/2022',
        title: 'Frontend Developer',
      },
    ],
  },
  {
    company: {
      link: 'https://petzzshop.com',
      logo: '/images/companies/petzzshop.webp',
      name: 'Petzzshop',
    },
    positions: [
      {
        dateFinish: '31/08/2022',
        dateStart: '21/08/2021',
        title: 'Web Developer',
      },
    ],
  },
]

const Work = () => (
  <section>
    <SectionTitle title="Work" />
    {work.map((job, idx) => (
      <JobPosition {...job} key={idx} />
    ))}
  </section>
)

export default Work
