import { useRef } from "react";

import classes from "./profile-form.module.css";

export interface ProfileFormProps {
  onChangePassword: (passwordData: {
    oldPassword: string;
    newPassword: string;
  }) => void;
}

export default function ProfileForm({ onChangePassword }: ProfileFormProps) {
  const oldPassword = useRef<HTMLInputElement>(null);
  const newPassword = useRef<HTMLInputElement>(null);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();

    const enteredOldPassword = oldPassword.current?.value ?? "";
    const enteredNewPassword = newPassword.current?.value ?? "";

    if (!enteredOldPassword || !enteredNewPassword) {
      alert("Please fill in both password fields.");
      return;
    }

    onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPassword} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}
