// import Link from 'next/link';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from 'next/image';

import SectionTitle from '../SectionTitle';
import ServicePropOne from '../ServicePropOne';

const ServicesWeCanHelp = () => {
  return (
    <div className="section section-padding">
      <div className="container">
        <SectionTitle
          subtitle="What We Can Do For You"
          title="Services we can <br> help you with"
          description=""
          textAlignment="heading-left mb--20 mb_md--70"
          textColor=""
        />
        <div className="row">
          <ServicePropOne
            colSize="col-lg-4"
            serviceStyle="service-style-2"
            itemShow="6"
            marginTop="yes"
          />
        </div>
      </div>
      <ul className="shape-group-7 list-unstyled">
        <li className="shape shape-1">
          <Image
            src={'/images/others/circle-2.png'}
            alt="Circle"
            width={886}
            height={888}
          />
        </li>
        <li className="shape shape-2">
          <Image
            src={'/images/others/bubble-2.png'}
            alt="Line"
            width={150}
            height={150}
          />
        </li>

        <li className="shape shape-3">
          <Image
            src={'/images/others/bubble-1.png'}
            alt="Line"
            width={88}
            height={88}
          />
        </li>
      </ul>
    </div>

    // <div className="section section-padding-2">
    //   <div className="container">
    //     <SectionTitle
    //       subtitle="What We Can Do For You"
    //       title="Services we can help you with"
    //       description="Nulla facilisi. Nullam in magna id dolor
    //         blandit rutrum eget vulputate augue sed eu imperdiet."
    //       textAlignment="heading-light-left"
    //       textColor=""
    //     />
    //     <div className="row">
    //       <ServicePropOne colSize="col-xl-4 col-md-6" serviceStyle="" itemShow={6} />
    //     </div>
    //   </div>
    //   <ul className="list-unstyled shape-group-10">
    //     <li className="shape shape-1">
    //       {/* <img src={process.env.PUBLIC_URL + '/images/others/line-9.png'} alt="Circle" /> */}
    //       <Image src={'/images/others/line-9.png'} alt="Circle" width={850} height={187} />
    //     </li>
    //     <li className="shape shape-2">
    //       {/* <img src={process.env.PUBLIC_URL + '/images/others/bubble-42.png'} alt="Circle" /> */}
    //       <Image src={'/images/others/bubble-42.png'} alt="Circle" width={124} height={445} />
    //     </li>
    //     <li className="shape shape-3">
    //       {/* <img src={process.env.PUBLIC_URL + '/images/others/bubble-43.png'} alt="Circle" /> */}
    //       <Image src={'/images/others/bubble-43.png'} alt="Circle" width={32} height={32} />
    //     </li>
    //   </ul>
    // </div>
  );
};

export default ServicesWeCanHelp;
