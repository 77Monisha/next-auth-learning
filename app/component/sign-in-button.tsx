"use client"
import { login } from "@/lib/actions/auth";

export const SignInButton = () => {
    return <button className="border-1 border-amber-400 w-32" onClick={() => login()}>Sign in with GitHub</button>
}