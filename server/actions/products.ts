"use server";

import prisma from "../database/"
import { Product as _Product } from "@/types/Product";
import { PriceUpdate } from "@/types/PriceUpdate";
import { format } from "date-fns"

type Product = _Product & {
  prices: PriceUpdate[]
}

export async function getProducts({ page = 0 }: { page: number }) {
  const p = await prisma.$transaction([
    prisma.product.count(),
    prisma.product.findMany({
      take: 5,
      skip: page * 5,
      include: {
        prices: {
          orderBy: {
            updateTime: "asc"
          }
        }
      }
    })
  ])

  return {
    total: p[0],
    items: p[1].map((item) => ({
      ...item,
      prices: item!.prices.map((i: any) => ({
        ...i,
        price: (i.price / 100).toString(),
        pricePerKilo: i.pricePerKilo.toString(),
        updateTime: format(i.updateTime, "dd/MM/yyyy")
      }))
    }))
  } as { total: number, items: Product[] }
}

