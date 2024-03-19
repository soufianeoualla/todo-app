
export const TopSection = () => {
  return (
    <div className="flex justify-between items-center w-full p-8 border-2 border-slate-300 rounded-2xl mt-10">
        <div>
        <h1 className="text-2xl font-bold ">Todo Done</h1>

        <p className=" text-muted-foreground ml-1">Keep it up</p>
        </div>
        
        <div className="h-24 w-24 rounded-full bg-primary flex justify-center items-center text-3xl font-bold text-white">
            1/3
        </div>
    </div>
  )
}
