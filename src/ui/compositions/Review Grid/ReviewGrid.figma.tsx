import { ReviewGrid } from "./ReviewGrid"
import figma from "@figma/code-connect"

figma.connect(
  ReviewGrid,
  "https://www.figma.com/design/8AQj34ysfReEm8l3z7asLu/DevMode-Demo?node-id=2082-278",
  {
    props: {
      gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
      padding: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
      headline: figma.string("Headline"),
      subhead: figma.string("Subhead"),
      cards: figma.children("Review Card"),
    },
    example: ({ gap, padding, headline, subhead, cards }) => (
      <section
        className={`flex flex-col items-start rounded-xl border border-border bg-background w-full mx-auto
          ${padding === "1200" ? "px-12 py-8 gap-10 max-w-6xl" : "px-6 py-4 gap-6 max-w-md"}`}
      >
        {/* Headline / Subhead */}
        <header className="flex flex-col gap-2 text-left">
          <h2 className="text-3xl font-bold">{headline}</h2>
          <p className="text-xl text-muted-foreground">{subhead}</p>
        </header>

        {/* Review Cards */}
        <div
          className={`grid w-full ${
            gap === "1200"
              ? "gap-8 sm:grid-cols-2 lg:grid-cols-3"
              : "gap-4 grid-cols-1"
          }`}
        >
          {cards}
        </div>
      </section>
    ),
  })
