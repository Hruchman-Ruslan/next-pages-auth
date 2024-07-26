import { getSession } from "next-auth/react";

import type { GetServerSidePropsContext } from "next";

import UserProfile from "@/components/profile/user-profile";

export interface ProfilePageProps {}

export default function ProfilePage({}: ProfilePageProps) {
  return <UserProfile />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
