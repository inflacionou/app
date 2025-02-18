
import { Skeleton } from "../ui/skeleton"
import ChartItem from "./chart"

export function ChartGrid({ data }: { data: any }) {
  console.log(data)

  if (!data) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-4">
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-4">
      {data.map((i) => {
        return <ChartItem key={i.id} data={i} />
      })}
    </div>
  )
}
