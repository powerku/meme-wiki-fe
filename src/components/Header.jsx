"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header({ children }) {
  const { data } = useSession();
  console.log(data);

  const clickHandler = () => {
    if (data) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <>
      <div>Meme Wiki</div>
      <button onClick={clickHandler}>{data ? "Logout" : "Login"}</button>
    </>
  );
}
