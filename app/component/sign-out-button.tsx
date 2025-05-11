"use client"
import { logout } from "@/lib/actions/auth";

export const SignOutButton = () => {
    return <button className="border-1 border-amber-400 w-32" onClick={() => logout()}>Logout</button>
}