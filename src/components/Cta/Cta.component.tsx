import Image from 'next/image';
import Link from 'next/link';

const Cta = () => {
  return (
    <div className="section call-to-action-area">
      <div className="container">
        <div className="call-to-action">
          <div className="section-heading heading-light">
            <span className="subtitle">Let`&#39;`s Work Together</span>
            <h2 className="title">Need a successful project?</h2>
            <Link
              href={process.env.PUBLIC_URL + '/contact'}
              className="axil-btn btn-large btn-fill-white"
            >
              Estimate Project
            </Link>
          </div>
          <div className="thumbnail">
            <div
              className="larg-thumb"
              data-sal="zoom-in"
              data-sal-duration="600"
              data-sal-delay="100"
            >
              <Image
                src={'/images/others/chat-group.png'}
                className="paralax-image"
                alt="Chat"
                width={661}
                height={390}
              />
            </div>
            <ul className="list-unstyled small-thumb">
              <li
                className="shape shape-1"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="400"
              >
                <Image
                  className="paralax-image"
                  src={'/images/others/laptop-poses.png'}
                  alt="Laptop"
                  width={354}
                  height={340}
                />
              </li>
              <li
                className="shape shape-2"
                data-sal="slide-left"
                data-sal-duration="800"
                data-sal-delay="300"
              >
                <Image
                  src={'/images/others/bill-pay.png'}
                  className="paralax-image"
                  alt="Bill"
                  width={338}
                  height={375}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-9">
        <li className="shape shape-1">
          <Image
            src={'/images/others/bubble-12.png'}
            alt="Comments"
            width={601}
            height={289}
          />
        </li>
        <li className="shape shape-2">
          <Image
            src={'/images/others/bubble-16.png'}
            alt="Comments"
            width={24}
            height={24}
          />
        </li>
        <li className="shape shape-3">
          <Image
            src={'/images/others/bubble-13.png'}
            alt="Comments"
            width={75}
            height={75}
          />
        </li>
        <li className="shape shape-4">
          <Image
            src={'/images/others/bubble-14.png'}
            alt="Comments"
            width={80}
            height={80}
          />
        </li>
        <li className="shape shape-5">
          <Image
            src={'/images/others/bubble-16.png'}
            alt="Comments"
            width={24}
            height={24}
          />
        </li>
        <li className="shape shape-6">
          <Image
            src={'/images/others/bubble-15.png'}
            alt="Comments"
            width={140}
            height={140}
          />
        </li>
        <li className="shape shape-7">
          <Image
            src={'/images/others/bubble-16.png'}
            alt="Comments"
            width={24}
            height={24}
          />
        </li>
      </ul>
    </div>
  );
};

export default Cta;
