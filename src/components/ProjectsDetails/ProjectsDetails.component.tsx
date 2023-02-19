import Link from 'next/link';
import { FC } from 'react';
import { ProjectsDetailsProps } from './types';

const ProjectsDetails: FC<ProjectsDetailsProps> = ({ detailsProject }) => {
  return (
    <section className="section-padding single-portfolio-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-heading heading-left mb-0">
              <span className="subtitle">
                {detailsProject.category.map((cat, i) => (
                  <span key={i}>{cat}</span>
                ))}
              </span>
              <h3 className="title">{detailsProject.title}</h3>
            </div>
            {detailsProject.body.map((para, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: para }}></p>
            ))}
            <Link href="#" className="axil-btn btn-fill-primary">
              Get it Now
            </Link>
          </div>
          <div className="col-lg-6 offset-xl-1">
            <div className="why-choose-us">
              <div className="section-heading heading-left">
                <h3 className="title">We delivered</h3>
                <p>
                  Digital technology has made our world more transparent and interconnected, posing
                  new challenges and opportunities for every business.
                </p>
              </div>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaCompress /> Strategy
                  </Accordion.Header>
                  <Accordion.Body>
                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida
                    pellentesque.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaCode /> Design
                  </Accordion.Header>
                  <Accordion.Body>
                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida
                    pellentesque.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaGlobe /> Development
                  </Accordion.Header>
                  <Accordion.Body>
                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida
                    pellentesque.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetails;
