/* eslint-disable @next/next/no-img-element */
import { LogoProps } from './types';

const Logo = ({ limage, dimage, simage }: LogoProps) => {
  return (
    <>
      {/* <Link href={process.env.PUBLIC_URL + '/'}> */}
      <img className="light-version-logo" src={limage} alt="logo" />
      <img className="dark-version-logo" src={dimage} alt="logo" />
      <img className="sticky-logo" src={simage} alt="logo" />
      {/* </Link> */}
    </>
  );
};

export default Logo;
