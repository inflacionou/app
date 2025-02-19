import { useEffect, useState } from "react"
import { PriceUpdate } from "@/types/PriceUpdate"
import { ProductWithPrices as Product } from "@/types/Product"
import { getProducts } from "@/server/actions/products"

type PagedChartData = {
  items: Array<Product>,
  total: number
}

function usePagedCharts() {
  const [data, setData] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (loading) return;
    setLoading(true)
    fetchProducts().finally(() => {
      setLoading(false)
    })

  }, [currentPage])

  async function fetchProducts() {
    const { total, items } = await getProducts({ page: currentPage })
    setTotal(total)
    setData((old: Product[]) => ([...old, ...items]))
  }

  function nextPage() {
    if (!hasNextPage()) return
    setCurrentPage(old => old + 1)
  }

  function hasNextPage() {
    return total > currentPage * 5
  }

  return {
    data,
    loading,
    hasNextPage,
    nextPage,
  }
}


export { usePagedCharts }
export type { PagedChartData }
