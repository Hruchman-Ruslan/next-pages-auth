// import { useEffect, useState } from "react";

// import { getSession } from "next-auth/react";

import ProfileForm from "./profile-form";

import classes from "./user-profile.module.css";

export interface UserProfileProps {}

export default function UserProfile({}: UserProfileProps) {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const checkSession = async () => {
  //     const session = await getSession();

  //     if (!session) {
  //       window.location.href = "/auth";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   };

  //   checkSession();
  // }, []);

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}
