import React from "react"
import { ReviewCard } from "@/ui/primatives/Review Card/ReviewCard"

export type ReviewGridProps = {
  gap?: "600" | "1200"
  padding?: "600" | "1200"
  top?: React.ReactNode
  cards?: React.ReactNode[]
}

export function ReviewGrid({
  gap = "1200",
  padding = "1200",
  top,
  cards,
}: ReviewGridProps) {
  return (
    <section
      className={`bg-background border border-border flex flex-col items-start rounded-xl w-full max-w-6xl mx-auto
        ${padding === "1200" ? "px-12 py-8" : "px-6 py-4"}
        ${gap === "1200" ? "gap-10" : "gap-6"}`}
    >
      {/* Top Content (headline / subhead) */}
      {top && <header className="flex flex-col gap-2 w-full">{top}</header>}

      {/* Review Cards Grid */}
      <div
        className={`grid w-full ${
          gap === "1200" ? "gap-8" : "gap-4"
        } sm:grid-cols-2 lg:grid-cols-3`}
      >
        {cards && cards.length > 0
          ? cards
          : Array.from({ length: 6 }).map((_, i) => (
              <ReviewCard
                key={i}
                title="Review Title"
                review="Description"
                reviewer="Reviewer Name"
                date="Date"
                rating={5}
              />
            ))}
      </div>
    </section>
  )
}
