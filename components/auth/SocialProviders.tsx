import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
export const SocialProviders = () => {
  return (
    <div className="flex items-center gap-x-1 w-full">
      <Button className="w-full" size={"lg"} variant={"outline"}>
        <FaGithub className="h-5 w-5" />
      </Button>
      <Button className="w-full" size={"lg"} variant={"outline"}>
        <FcGoogle className="h-5 w-5" />
      </Button>
    </div>
  );
};
