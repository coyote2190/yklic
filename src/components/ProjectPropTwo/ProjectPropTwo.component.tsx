import Image from 'next/image';
import Link from 'next/link';
import { slugify } from 'utils/slugify';
import { ProjectPropTwoProps } from './types';

const ProjectPropTwo = ({ projectStyle, portfolio }: ProjectPropTwoProps) => {
  return (
    <div className={`project-grid ${projectStyle}`}>
      <div className="thumbnail">
        <Link href={`/project/${slugify(portfolio.title)}`}>
          <Image src={portfolio.image} alt="icon" width={600} height={700} />
        </Link>
      </div>
      <div className="content">
        <span className="subtitle">
          {portfolio.category.map((cat, i) => (
            <span key={i}>{cat}</span>
          ))}
        </span>
        <h3 className="title">
          <Link href={`/project/${slugify(portfolio.title)}`}>
            {portfolio.title}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default ProjectPropTwo;
