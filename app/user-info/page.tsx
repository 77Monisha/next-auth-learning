import { auth } from "@/auth";
import Image from "next/image";
import { SignOutButton } from "../component/sign-out-button";

export default async function UserInfo() {
    const session = await auth();

   
        return (
            <div className="flex flex-col">
                <h1>{session?.user?.name}</h1>
                <p>{session?.user?.email}</p>
                {session?.user?.image && <Image src={session?.user?.image} alt={session?.user?.name ?? 'Avatar'} width={50} height={50} className="rounded-full" />}
                <SignOutButton/>
            </div>
        )
}