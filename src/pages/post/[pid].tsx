import { gql, useQuery } from '@apollo/client';
import PostDetails from 'components/PostDetails';
import MainLayout from 'layouts/MainLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';

export const ALL_POSTS_QUERY = gql`
  query allPosts {
    users {
      id
      email
      name
    }
  }
`;

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      // variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      // notifyOnNetworkStatusChange: true,
    }
  );
  console.log(data);

  return (
    <>
      <Head>
        <title>nextJs Boilerplate - Page Post</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostDetails pid={pid} />
    </>
  );
};

export default Post;

Post.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
