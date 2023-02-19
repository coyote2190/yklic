import Image from 'next/image';
import Accordion from 'react-bootstrap/Accordion';
import SectionTitle from '../SectionTitle';

const allData = [
  {
    id: 1,
    title: 'Nunc rhoncus magna ut venenatis feugiat.',
    body: 'Vivamus magna est, placerat et dignissim et, elementum quis lacus. Nulla laoreet pharetra vehicula. Vestibulum euismod augue ac velit consectetur, ac tincidunt ante hendrerit. Sed lacinia elementum felis, ut tempus ipsum blandit non.',
  },
  {
    id: 2,
    title: 'Nam interdum ante sapien, quis ullamcorper.',
    body: 'Vivamus magna est, placerat et dignissim et, elementum quis lacus. Nulla laoreet pharetra vehicula. Vestibulum euismod augue ac velit consectetur, ac tincidunt ante hendrerit. Sed lacinia elementum felis, ut tempus ipsum blandit non.',
  },
  {
    id: 3,
    title: 'Nam interdum ante sapien, quis ullamcorper.',
    body: 'Vivamus magna est, placerat et dignissim et, elementum quis lacus. Nulla laoreet pharetra vehicula. Vestibulum euismod augue ac velit consectetur, ac tincidunt ante hendrerit. Sed lacinia elementum felis, ut tempus ipsum blandit non.',
  },
  {
    id: 4,
    title: 'Nam interdum ante sapien, quis ullamcorper.',
    body: 'Vivamus magna est, placerat et dignissim et, elementum quis lacus. Nulla laoreet pharetra vehicula. Vestibulum euismod augue ac velit consectetur, ac tincidunt ante hendrerit. Sed lacinia elementum felis, ut tempus ipsum blandit non.',
  },
  {
    id: 5,
    title: 'Nam interdum ante sapien, quis ullamcorper.',
    body: 'Vivamus magna est, placerat et dignissim et, elementum quis lacus. Nulla laoreet pharetra vehicula. Vestibulum euismod augue ac velit consectetur, ac tincidunt ante hendrerit. Sed lacinia elementum felis, ut tempus ipsum blandit non.',
  },
  {
    id: 6,
    title: 'Nam interdum ante sapien, quis ullamcorper.',
    body: 'Vivamus magna est, placerat et dignissim et, elementum quis lacus. Nulla laoreet pharetra vehicula. Vestibulum euismod augue ac velit consectetur, ac tincidunt ante hendrerit. Sed lacinia elementum felis, ut tempus ipsum blandit non.',
  },
];

const Faq = ({}) => {
  return (
    <div className="section section-padding-equal bg-color-mercury faq-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-4">
            <SectionTitle
              subtitle="Pricing Plan"
              title="Frequently asked questions"
              description="Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque."
              textAlignment="heading-left"
              textColor=""
            />
          </div>
          <div className="col-lg-7 col-xl-8">
            <div className="faq-accordion">
              <Accordion defaultActiveKey="1">
                {allData.map((data) => (
                  <Accordion.Item eventKey={data.id} key={data.id}>
                    <Accordion.Header>
                      <span>{`${data.id}.`}</span>
                      {data.title}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>{data.body}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-6 list-unstyled">
        <li className="shape shape-1">
          <Image
            src={'/images/others/bubble-7.png'}
            alt="Bubble"
            width={460}
            height={446}
          />
        </li>

        <li className="shape shape-2">
          <Image
            src={'/images/others/line-4.png'}
            alt="line"
            width={1682}
            height={445}
          />
        </li>
        <li className="shape shape-4">
          <Image
            src={'/images/others/poses-lady.png'}
            alt="Poses"
            width={647}
            height={576}
          />
        </li>
      </ul>
    </div>
  );
};

export default Faq;
