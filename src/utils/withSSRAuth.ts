import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

export const withSSRAuth: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  const hasCookie = cookies["PICKUP_ACCESS_TOKEN"]!!;

  if (!hasCookie) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
