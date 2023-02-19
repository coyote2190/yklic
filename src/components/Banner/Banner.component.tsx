import AnimationOnScroll from 'components/AnimationOnScroll';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="banner banner-style-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <AnimationOnScroll animateIn="slideInUp">
                <span className="subtitle">JOHNATHAN SMITHsss</span>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="slideInUp" delay={500}>
                <h1 className="title">UI/UX ineraction designer</h1>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="slideInUp" delay={500}>
                <div className="btn-group">
                  <Link
                    href={'https://dribbble.com/axilweb/'}
                    className="axil-btn btn-fill-primary btn-larg"
                  >
                    Latest Work On Dribbbl
                  </Link>
                  <Link href={'/about-us'} className="about-btn">
                    About Me
                  </Link>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <div className="large-thumb">
                <AnimationOnScroll
                  animateIn="slideInUp"
                  // duration={1}
                  // animateOnce={true}
                  delay={200}
                >
                  <img src={'/images/banner/banner-thumb-6.png'} alt="Shape" />
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-20">
        <li className="shape shape-1">
          <Image
            src={'/images/others/bubble-32.png'}
            alt="Bubble"
            width={550}
            height={208}
          />
        </li>
        <li className="shape shape-2">
          <Image
            src={'/images/others/bubble-33.png'}
            alt="Bubble"
            width={1015}
            height={547}
          />
        </li>
        <li className="shape shape-4">
          <Image
            src={'/images/others/bubble-14.png'}
            alt="Bubble"
            width={80}
            height={80}
          />
        </li>
        <li className="shape shape-5">
          <Image
            src={'/images/others/bubble-4.png'}
            alt="Bubble"
            width={49}
            height={49}
          />
        </li>
        <li className="shape shape-6">
          <Image
            src={'/images/others/bubble-30.png'}
            alt="Bubble"
            width={103}
            height={103}
          />
        </li>
        <li className="shape shape-7">
          <Image
            src={'/images/others/bubble-31.png'}
            alt="Bubble"
            width={24}
            height={24}
          />
        </li>
        <li className="shape shape-8 marque-images" />
      </ul>
    </div>
  );
};

export default Banner;
