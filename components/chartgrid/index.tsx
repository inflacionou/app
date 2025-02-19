
import { Skeleton } from "../ui/skeleton"
import ChartItem from "./chart"
import { ProductWithPrices as Product } from "@/types/Product"

export function ChartGrid({ data, loading }: { data: Product[], loading: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 p-4">
      {data.map((i: Product) => {
        return <ChartItem key={i.id} data={i} />
      })}

      {loading && (<>
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
        <Skeleton className="w-[300px] md:w-[300px] h-[300px] rounded-md" />
      </>)}
    </div>
  )
}
