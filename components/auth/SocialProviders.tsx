'use client'

import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
export const SocialProviders = () => {
  const onClick = (provider:'github')=>{
    signIn(provider,{
      callbackUrl:DEFAULT_LOGIN_REDIRECT
    })
  }
  return (
    <div className="flex items-center gap-x-1 w-full">
      <Button
      onClick={()=>{
        onClick('github')
      }}
       className="w-full" size={"lg"} variant={"outline"}>
        <FaGithub className="h-5 w-5" />
      </Button>
      
    </div>
  );
};
