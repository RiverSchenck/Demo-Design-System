import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { User } from "lucide-react"

import { cn } from "@/lib/utils"

export type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> & {
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl"
    shape?: "circle" | "square"
    hasNotification?: boolean
    notificationPosition?: "top" | "bottom"
    type?: "image" | "initial" | "placeholder"
    src?: string
    initials?: string
    name?: string // Used to generate initials if not provided
  }

  // Helper function to generate initials from name
  function getInitials(name?: string, providedInitials?: string): string {
    if (providedInitials) return providedInitials
    if (!name) return ""

    const parts = name.trim().split(/\s+/)
    if (parts.length === 0) return ""
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || ""
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }

  // Helper function to get icon size based on avatar size
  function getIconSize(size: AvatarProps["size"]): number {
    const sizeMap = {
      xxs: 12,
      xs: 14,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 28,
    }
    return sizeMap[size || "md"]
  }

  function Avatar({
    className,
    size = "md",
    shape = "circle",
    hasNotification = false,
    notificationPosition = "top",
    type = "image",
    src,
    initials,
    name,
    ...props
  }: AvatarProps) {
    const displayInitials = getInitials(name, initials)
    const iconSize = getIconSize(size)

    return (
      <div className="relative inline-flex">
        <AvatarPrimitive.Root
          data-slot="avatar"
          data-size={size}
          data-shape={shape}
          data-notification={hasNotification}
          data-notification-position={notificationPosition}
          className={cn(
            "flex shrink-0 overflow-hidden rounded-full bg-muted border border-foreground",
            {
              "rounded-md": shape === "square",
              "rounded-full": shape === "circle",
            },
            {
              "size-6": size === "xxs",
              "size-8": size === "xs",
              "size-10": size === "sm",
              "size-12": size === "md",
              "size-14": size === "lg",
              "size-16": size === "xl",
            },
            className
          )}
          {...props}
        >
        {type === "image" && src && (
          <>
            <AvatarPrimitive.Image
              data-slot="avatar-image"
              src={src}
              alt={name || "Avatar"}
              className="aspect-square size-full object-cover"
            />
            <AvatarPrimitive.Fallback
              data-slot="avatar-fallback"
              className="flex size-full items-center justify-center text-sm font-medium bg-muted"
            >
              {displayInitials || <User size={iconSize} className="text-muted-foreground" />}
            </AvatarPrimitive.Fallback>
          </>
        )}

        {type === "image" && !src && (
          <AvatarPrimitive.Fallback
            data-slot="avatar-fallback"
            className="flex size-full items-center justify-center text-sm font-medium bg-muted"
          >
            {displayInitials || <User size={iconSize} className="text-muted-foreground" />}
          </AvatarPrimitive.Fallback>
        )}

      {type === "initial" && (
        <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className="flex size-full items-center justify-center text-sm font-medium bg-muted"
        >
          {displayInitials || <User size={iconSize} className="text-muted-foreground" />}
        </AvatarPrimitive.Fallback>
      )}

      {type === "placeholder" && (
        <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className="flex size-full items-center justify-center bg-muted"
        >
          <User size={iconSize} className="text-muted-foreground" />
        </AvatarPrimitive.Fallback>
      )}
        </AvatarPrimitive.Root>

        {hasNotification && (
          <span
            data-slot="avatar-notification"
            className={cn(
              "absolute size-2 rounded-full bg-destructive ring-2 ring-background",
              notificationPosition === "top"
                ? "top-0 right-0 translate-x-1/4 -translate-y-1/4"
                : "bottom-0 right-0 translate-x-1/4 translate-y-1/4"
            )}
          />
        )}
      </div>
    )
  }

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
