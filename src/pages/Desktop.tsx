import React from "react"
import { ReviewGrid } from "@/ui/compositions/Review Grid/ReviewGrid"
import { Button } from "@/ui/primatives/Button/Button"
import { ReviewCard } from "@/ui/primatives/Review Card/ReviewCard"
import { Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Desktop() {
  const reviewCards = [
    <ReviewCard
      key="1"
      title="Incredible experience!"
      review="This tool completely streamlined our design-to-dev workflow. The handoff is smoother than ever."
      reviewer="Alex Johnson"
      date="May 15, 2024"
      rating={5}
    />,
    <ReviewCard
      key="2"
      title="Super intuitive"
      review="Even our non-technical team members can now build and manage assets confidently. Love it!"
      reviewer="Priya Patel"
      date="April 28, 2024"
      rating={4}
    />,
    <ReviewCard
      key="3"
      title="Saved us so much time"
      review="Before this, our asset management was chaos. Now everything's in one place, easy to find, and consistent."
      reviewer="Liam Nguyen"
      date="June 3, 2024"
      rating={5}
    />,
    <ReviewCard
      key="4"
      title="Beautifully designed"
      review="The interface feels modern and approachable. It's easy to forget this is enterprise software."
      reviewer="Sofia Martínez"
      date="March 22, 2024"
      rating={5}
    />,
    <ReviewCard
      key="5"
      title="Customer support is top-notch"
      review="We had a setup question and got a response within an hour. Seriously impressive support team!"
      reviewer="James Wilson"
      date="May 2, 2024"
      rating={5}
    />,
    <ReviewCard
      key="6"
      title="Game changer for our brand"
      review="Helped us unify our brand assets across markets. Everything feels connected now."
      reviewer="Reviewer Name"
      date="Date"
      rating={3}
    />,
  ]

  const topContent = (
    <>
      <h2 className="text-3xl font-bold">What our customers are saying</h2>
      <p className="text-xl text-muted-foreground">
        Real feedback from people using our platform every day.
      </p>
    </>
  )

  return (
    <div
      className="bg-background relative size-full"
      data-name="Desktop"
      data-node-id="2086:6270"
    >
      {/* Sidebar */}
      <div
        className="absolute border border-muted/80 border-solid h-[1000px] left-0 top-0 w-[260px] bg-sidebar"
        data-node-id="2083:2212"
      >
        {/* Navigation Container */}
        <div
          className="content-stretch flex flex-col gap-1 items-start left-[5px] max-w-[250px] min-w-[250px] top-[58px] w-[250px]"
          data-name="Container"
          data-node-id="2086:6247"
        >
          <Button
            variant="link"
            size="default"
            styleType="new-york"
            showLabel
            className={cn(
              "w-full justify-start bg-sidebar-accent text-sidebar-accent-foreground rounded-t-md rounded-b-md"
            )}
            data-node-id="2086:6248"
          >
            Reviews
          </Button>
          <Button
            variant="link"
            size="default"
            styleType="new-york"
            showLabel
            className="w-full justify-start text-sidebar-foreground"
            data-node-id="2086:6249"
          >
            Dashboard
          </Button>
          <Button
            variant="link"
            size="default"
            styleType="new-york"
            showLabel
            className="w-full justify-start text-sidebar-foreground"
            data-node-id="2086:6250"
          >
            Case Studies
          </Button>
          <Button
            variant="link"
            size="default"
            styleType="new-york"
            showLabel
            className="w-full justify-start text-sidebar-foreground"
            data-node-id="2086:6251"
          >
            Changing Text
          </Button>
          <Button
            variant="link"
            size="default"
            styleType="new-york"
            showLabel
            className="w-full justify-start text-sidebar-foreground"
            data-node-id="2086:6252"
          >
            Help Articles
          </Button>
        </div>

        {/* Delete Button */}
        <div className="absolute bottom-0 left-0 p-2 w-full">
          <Button
            variant="destructive"
            size="default"
            styleType="default"
            leadingIcon={<Trash2 />}
            showLeadingIcon
            showLabel
            className="w-full"
            data-node-id="2083:2282"
          >
            Delete
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-[260px] p-8">
        <ReviewGrid
          gap="1200"
          padding="1200"
          top={topContent}
          cards={reviewCards}
        />
      </div>
    </div>
  )
}

