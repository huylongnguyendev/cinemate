import { cn } from "@/lib/utils"

export default function ItemScore({ score }: { score: number }) {
  const setColor = score < 4 ? "text-red-500" :
    score < 6 ? "text-orange-500" :
      score < 8 ? "text-yellow-500" : "text-green-500"

  return (
    <>
      <div className="flex items-center gap-4 mt-8">
        <p className="font-semibold">Điểm:</p>
        <p className={cn("text-lg font-semibold", setColor)}>{score * 10}%</p>
      </div>
    </>
  )
}
