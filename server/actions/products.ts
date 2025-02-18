"use server";

import prisma from "../database/"

export async function getProducts() {
  const products = await prisma.product.findMany({
    take: 10,
    include: {
      prices: {
        orderBy: {
          updateTime: "desc"
        }
      }
    }
  })

  return products.map((item) => ({
    ...item,
    prices: item.prices.map((i) => ({
      ...i,
      price: (i.price / 100).toString(),
      pricePerKilo: i.pricePerKilo.toString(),
      updateTime: i.updateTime.toISOString()
    }))
  }))
}

