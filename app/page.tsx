"use server";

import { auth } from "@/auth";
import Link from "next/link";
import { SignOutButton } from "./component/sign-out-button";
import { SignInButton } from "./component/sign-in-button";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div>
        <Link href="/user-info"> User Info </Link>
        <SignOutButton />
      </div>
    );
  }

  return (
    <div>
      {" "}
      <p> You Are Not Signed In</p> <SignInButton />
    </div>
  );
}