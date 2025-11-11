import { Star } from "lucide-react"
import { Avatar, AvatarImage } from '../Avatar/Avatar'
import { cn } from "@/lib/utils"

export type ReviewCardProps = {
  title: string
  review: string
  reviewer: string
  date: string
  avatar?: string
  rating?: number // 0–5
  className?: string
}

export function ReviewCard({
  title,
  review,
  reviewer,
  date,
  avatar,
  rating = 0,
  className,
}: ReviewCardProps) {
  return (
    <div
      className={cn(
        // card itself centered, but content left-aligned
        "bg-background border border-border flex flex-col gap-6 p-6 rounded-xl w-full max-w-md mx-auto",
        className
      )}
    >
      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          const isFilled = rating > 0 && i < rating
          return (
            <Star
              key={i}
              size={20}
              className={isFilled
                ? "text-foreground fill-foreground"
                : "text-foreground"
              }
              stroke="currentColor"
              fill={isFilled ? "currentColor" : "none"}
            />
          )
        })}
      </div>

      {/* Review Body */}
      <div className="flex flex-col gap-2 text-left">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{review}</p>
      </div>

     {/* Reviewer */}
    <div className="flex items-center gap-3">
    <Avatar className="size-12" type="image" src={avatar}>
        {avatar ? (
        <AvatarImage src={avatar} alt={reviewer} />
        ) : (
        <Avatar initials={reviewer} type="initial">
        {reviewer
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </Avatar>
        )}
    </Avatar>
    <div className="text-left">
        <p className="text-sm text-muted-foreground">{reviewer}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
    </div>
    </div>
    </div>
  )
}
