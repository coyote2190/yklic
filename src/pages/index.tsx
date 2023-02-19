import Head from 'next/head';

import About from 'components/About';
import Banner from 'components/Banner';
import Cta from 'components/Cta';
import Faq from 'components/Faq';
import Projects from 'components/Projects';
import ServicesWeCanHelp from 'components/ServicesWeCanHelp';
import HomeLayout from 'layouts/HomeLayout/HomeLayout';
import { NextPageWithLayout } from 'types/types';

const Index: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>nextJs Boilerplate - Page Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <ServicesWeCanHelp />
      <Projects />
      <About />
      <Faq />
      <Cta />
    </>
  );
};

export default Index;

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

// `getStaticProps`, and similar Next.js methods like `getStaticPaths` and `getServerSideProps`
// only run in Node.js. Check the terminal to see the environment variables
export async function getStaticProps() {
  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`
  // console.log('[Node.js only] ENV_VARIABLE:', process.env.ENV_VARIABLE);
  // console.log(
  //   '[Node.js only] ENV_LOCAL_VARIABLE:',
  //   process.env.ENV_LOCAL_VARIABLE
  // );
  // console.log(process.env);

  return { props: {} };
}
