import type { Meta, StoryObj } from "@storybook/react"
import type { ReactNode } from "react"
import { Figma, PlayCircle, GitBranch, LayoutPanelTop } from "lucide-react"

const meta = {
  title: "Welcome",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta

type Story = StoryObj

const InfoTile = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: ReactNode
}) => (
  <div className="rounded-xl border border-border bg-card/60 p-5 shadow-sm backdrop-blur">
    <div className="mb-3 flex items-center gap-2 text-primary">
      {icon}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
)

export const Overview: Story = {
  render: () => (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background/70">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-8 py-16">
        <header className="flex flex-col gap-6 rounded-3xl border border-border bg-card/70 p-10 shadow-lg backdrop-blur">
          <div className="flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Figma className="size-6" aria-hidden />
            </span>
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Live demo companion</p>
              <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Figma Dev Mode × React Stories</h1>
            </div>
          </div>
          <p className="max-w-3xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            This storybook is the code-side narrative for my Dev Mode demo. Each component mirrors (kind of...) the
            nodes I expose in Figma, so reviewers can jump between design and implementation with confidence.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <InfoTile
            title="Lead with Dev Mode"
            description="Open the Figma file, spotlight the Button variant set, then deep-link here to show the exact component states and props."
            icon={<PlayCircle className="size-5" aria-hidden />}
          />
          <InfoTile
            title="Highlight Hand-off"
            description="Emphasize shared tokens and data-slot attributes. Reviewers can inspect Tailwind styling and variants directly in the Controls panel."
            icon={<LayoutPanelTop className="size-5" aria-hidden />}
          />
          <InfoTile
            title="Show Change Confidence"
            description="Explain how Chromatic snapshots back up visual QA. Mention the `chromatic` script and link results during the interview."
            icon={<GitBranch className="size-5" aria-hidden />}
          />
        </section>

        <section className="grid gap-4 rounded-3xl border border-border bg-card/60 p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">Key Story Groups</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-background/80 p-4">
              <h3 className="mb-2 text-base font-semibold">Primitives</h3>
              <p className="text-sm text-muted-foreground">Button, Input, Separator, and Card provide the atomic building blocks aligned with Dev Mode tokens.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/80 p-4">
              <h3 className="mb-2 text-base font-semibold">Compositions</h3>
              <p className="text-sm text-muted-foreground">ReviewCard demonstrates how the primitives compose into customer-facing moments just like in the Figma file.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  ),
}
