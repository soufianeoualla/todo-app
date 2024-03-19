import AddTask from "@/components/dashboard/AddTask"
import { Tasks } from "@/components/dashboard/Tasks"
import { TopSection } from "@/components/dashboard/TopSection"

const DashboardPage = () => {
  return (
    <div className="flex justify-center flex-col items-center w-[400px] m-auto">
      <TopSection/>
     <AddTask/>
     <Tasks/>
    </div>
  )
}

export default DashboardPage
