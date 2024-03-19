import Link from "next/link"
import { Button } from "./ui/button"

export const HeroSection = () => {
  return (
    <main className="h-[70vh]  flex justify-center items-center flex-col w-[50%] m-auto space-y-5 text-center ">
      <div className=" space-y-2">
      <h1 className="text-5xl font-bold capitalize">
        Master Your Day with <span className=" text-primary">Tasking</span>
      </h1>
      <h2>Effortless Task Management, Every Day</h2>
      </div>
      <p className="text-muted-foreground">
        Welcome to <span className=" text-primary font-medium">Tasking</span>, your ultimate companion for
        staying organized and productive. Whether you&lsquo;re tackling personal
        projects or collaborating with a team, our app simplifies task
        management so you can focus on what matters most. Say hello to
        streamlined workflows, seamless prioritization, and never missing a
        deadline again.
      </p>
      <Button asChild size={'lg'}>
        <Link href={'/dashboard'}>
      Start Organizing
        </Link>
      </Button>

    </main>
  )
}

