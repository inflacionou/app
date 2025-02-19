"use client"

import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button"
import { ChevronRight, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ChartGrid } from "@/components/chartgrid";
import { usePagedCharts } from "@/hooks/usePagedCharts";

export default function Home() {
  const { data, nextPage, hasNextPage, loading } = usePagedCharts()

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />

      <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="z-10 gap-8 min-h-[600px] flex flex-col items-center justify-center text-center">
        <div className="flex flex-col gap-1 items-center">
          <span className="font-kanit font-bold text-5xl text-neutral-800 md:text-8xl">
            INF<span className="text-red-500">L</span>ACIONOU
          </span>
          <span className="max-w-[400px] font-sans text-sm md:text-xl">
            Quer saber quanto realmente aumentou os produtos que você precisa em casa?
          </span>
        </div>

        <div className="w-2/3 flex gap-2 md:w-full">
          <Input placeholder="Pesquise aqui!" />
          <Button className="relative bg-red-500">
            <ChevronRight />
          </Button>
        </div>
      </motion.div>

      <ChartGrid data={data} loading={loading} />

      {hasNextPage() && (
        <div className="w-full flex p-4 items-center justify-center">
          <Button onClick={nextPage} disabled={loading}>
            {loading && (<>
              <Loader2 className="animate-spin" />
              Carregando
            </>)}

            {!loading && (<>Carregar Mais</>)}
          </Button>
        </div>
      )}
    </div>
  );
}
