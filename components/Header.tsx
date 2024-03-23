import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "@/auth";
import { IoLogOutOutline } from "react-icons/io5";
import { logout } from "@/actions/logout";

export const Header = async () => {
  const session = await auth();
 ;
  return (
    <header className="">
      <div className="mx-auto flex justify-between h-24 max-w-screen-xl items-center gap-8 px-4 ">
        <Link className=" text-primary text-4xl font-bold sm:text-3xl" href="/">
          Tasking.
        </Link>

        <div className="flex  items-center justify-end md:justify-between">
          <div className="flex items-center gap-4">
            {!session && (
              <div className="sm:flex sm:gap-4">
                <Button className="sm:w-10" asChild size={"lg"}>
                  <Link href={"/auth/login"}>Login</Link>
                </Button>
                <Button className="sm:w-10" asChild size={"lg"} variant={"link"}>
                  <Link href={"/auth/register"}>Register</Link>
                </Button>
              </div>
            )}
            {session && (
              <form action={logout}>
                <Button type="submit" className=" flex gap-x-2 items-center">
                  Log Out
                  <IoLogOutOutline className="w-5 h-5" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
