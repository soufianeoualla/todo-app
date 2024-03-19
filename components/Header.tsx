import Link from "next/link"
import { Button } from "./ui/button"

export const Header = () => {
  return (
    <header className="">
  <div className="mx-auto flex justify-between h-24 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Link className=" text-primary text-4xl font-bold" href="/">
      Tasking.
      
    </Link>

    <div className="flex  items-center justify-end md:justify-between">
     

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
       
      <Button asChild  size={'lg'}>
        <Link href={'/auth/login'}>
        Login
        </Link>
      </Button>
      <Button asChild size={'lg'} variant={'link'}>
      <Link href={'/auth/register'}>
        Register
        </Link>
      </Button>
        </div>
      
      </div>
    </div>
  </div>
</header>
  )
}
