import Image from 'next/image';
import Link from 'next/link';
import { slugify } from 'utils/slugify';
import { ServicePropOneProps } from './types';

const ServicePropOne = ({
  colSize,
  serviceStyle,
  itemShow,
  marginTop = false,
}: ServicePropOneProps) => {
  const topMargin = (index: number) => {
    if (marginTop === true) {
      if (index === 0) {
        return 'mt--200 mt_md--0';
      } else if (index === 1) {
        return 'mt--100 mt_md--0';
      } else {
        return 'mt--0';
      }
    } else {
      return '';
    }
  };

  const AllData = [
    {
      image: '/images/icon/icon-1.png',
      title: 'Design',
      description:
        'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.',
    },
    {
      image: '/images/icon/icon-2.png',
      title: 'Development',
      description:
        'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.',
    },
    {
      image: '/images/icon/icon-3.png',
      title: 'Online marketing',
      description:
        'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.',
    },
    {
      image: '/images/icon/icon-4.png',
      title: 'Business',
      description:
        'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.',
    },
    {
      image: '/images/icon/icon-5.png',
      title: 'Technology',
      description:
        'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.',
    },
    {
      image: '/images/icon/icon-6.png',
      title: 'Content strategy',
      description:
        'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.',
    },

    {
      image: '/images/icon/icon-29.png',
      title: 'Logo & Branding',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Design',
    },
    {
      image: '/images/icon/icon-27.png',
      title: 'Website Design',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Design',
    },
    {
      image: '/images/icon/icon-28.png',
      title: 'Mobile app design',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Design',
    },
    {
      image: '/images/icon/icon-4.png',
      title: 'Graphic/print design',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Design',
    },
    {
      image: '/images/icon/icon-30.png',
      title: 'Video production',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Design',
    },

    {
      image: '/images/icon/icon-31.png',
      title: 'Content Managment',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Development',
    },
    {
      image: '/images/icon/icon-32.png',
      title: 'Mobile app development',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Development',
    },
    {
      image: '/images/icon/icon-33.png',
      title: 'eCommerce',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Development',
    },
    {
      image: '/images/icon/icon-34.png',
      title: 'SEO',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Online Marketing',
    },
    {
      image: '/images/icon/icon-35.png',
      title: 'Pay-per click',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Online Marketing',
    },
    {
      image: '/images/icon/icon-36.png',
      title: 'Email marketing',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Online Marketing',
    },
    {
      image: '/images/icon/icon-37.png',
      title: 'Display marketing',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Online Marketing',
    },
    {
      image: '/images/icon/icon-38.png',
      title: 'Social Media marketing',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Online Marketing',
    },
    {
      image: '/images/icon/icon-39.png',
      title: 'Digital strategy',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Business',
    },
    {
      image: '/images/icon/icon-40.png',
      title: 'Business consulting',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Business',
    },
    {
      image: '/images/icon/icon-41.png',
      title: 'Content writing',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Business',
    },
    {
      image: '/images/icon/icon-42.png',
      title: 'Reporting',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Business',
    },
    {
      image: '/images/icon/icon-43.png',
      title: 'Hosting',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Technology',
    },
    {
      image: '/images/icon/icon-44.png',
      title: 'Big data analysis',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Technology',
    },
    {
      image: '/images/icon/icon-45.png',
      title: 'Web Audit Practices',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Content strategy',
    },
    {
      image: '/images/icon/icon-46.png',
      title: 'Marketing Flexibility',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Content strategy',
    },
    {
      image: '/images/icon/icon-47.png',
      title: 'Advertising Strategy',
      description:
        'We design professional looking yet simple Logo. Our designs are search engine and user friendly.',
      cate: 'Content strategy',
    },
  ];

  return (
    <>
      {AllData.slice(0, itemShow).map((data, index) => (
        <div className={`${colSize} ${topMargin(index)}`} key={index}>
          <div className={`services-grid ${serviceStyle}`}>
            <div className="thumbnail">
              <Image src={data.image} alt="icon" width={48} height={48} />
            </div>
            <div className="content">
              <h5 className="title">
                <Link
                  href={
                    process.env.PUBLIC_URL +
                    `/service-details/${slugify(data.title)}`
                  }
                >
                  {data.title}
                </Link>
              </h5>
              <p>{data.description}</p>
              <Link
                href={
                  process.env.PUBLIC_URL +
                  `/service-details/${slugify(data.title)}`
                }
                className="more-btn"
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServicePropOne;
