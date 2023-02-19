import Link from 'next/link';
import ProjectPropTwo from '../ProjectPropTwo';
import SectionTitle from '../SectionTitle';
import { ProjectType } from './types';

const portfolioData: ProjectType[] = [
  {
    id: 1,
    image: '/images/project/project-1.png',
    title: 'Aqua 2000',
    category: ['Branding', 'Website', 'App'],
    excerpt:
      'A quick view of industry specific problems solved with design by the awesome team at Keystroke.',
    body: [
      'From the designers and engineers who are creating the next generation of web and mobile experiences, to anyone putting a website together for the first time. We provide elegant solutions that set new standards for online publishing.',
      'Digital technology has made our world more transparent and interconnected, posing new challenges and opportunities for every business. A holistic, user-centric perspective is what truly sets one apart.',
    ],
  },
  {
    id: 2,
    image: '/images/project/project-2.png',
    title: 'Talent-France',
    category: ['Logo', 'Website', 'Mobile'],
    excerpt:
      'A quick view of industry specific problems solved with design by the awesome team at Keystroke.',
    body: [
      'From the designers and engineers who are creating the next generation of web and mobile experiences, to anyone putting a website together for the first time. We provide elegant solutions that set new standards for online publishing.',
      'Digital technology has made our world more transparent and interconnected, posing new challenges and opportunities for every business. A holistic, user-centric perspective is what truly sets one apart.',
    ],
  },
];

const Projects = ({}) => {
  return (
    <>
      <div className="section section-padding-equal bg-color-dark">
        <div className="container">
          <SectionTitle
            subtitle="Case study"
            title="Selected projects"
            description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue eget risus imperdiet."
            textAlignment="heading-light-left"
            textColor=""
          />
          <div className="row row-45">
            {portfolioData.map((data) => (
              <div className="col-md-6" key={data.id}>
                <ProjectPropTwo projectStyle="project-style-2" portfolio={data} />
              </div>
            ))}
          </div>
          <div className="more-project-btn">
            <Link
              href={process.env.PUBLIC_URL + '/project-grid-two'}
              className="axil-btn btn-fill-white"
            >
              Discover More Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
