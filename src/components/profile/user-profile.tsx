import ProfileForm from "./profile-form";

import classes from "./user-profile.module.css";

export interface UserProfileProps {}

export default function UserProfile({}: UserProfileProps) {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}
