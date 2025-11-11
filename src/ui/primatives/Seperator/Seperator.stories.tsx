import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "./Seperator"

const meta = {
  title: "Primitives/Separator",
  component: Separator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    orientation: "horizontal",
    decorative: true,
  },
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "Separator orientation",
    },
    decorative: {
      control: { type: "boolean" },
      description: "Whether the separator is decorative (not announced by screen readers)",
    },
    className: { control: false },
  },
} satisfies Meta<typeof Separator>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    orientation: "horizontal",
    className: "w-64",
  },
}

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    className: "w-64",
  },
}

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    className: "h-24",
  },
}

export const Decorative: Story = {
  args: {
    orientation: "horizontal",
    decorative: true,
    className: "w-64",
  },
}

export const NonDecorative: Story = {
  args: {
    orientation: "horizontal",
    decorative: false,
    className: "w-64",
  },
}

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <h3 className="text-lg font-semibold mb-2">Section One</h3>
        <p className="text-sm text-muted-foreground">Content for the first section.</p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-semibold mb-2">Section Two</h3>
        <p className="text-sm text-muted-foreground">Content for the second section.</p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-semibold mb-2">Section Three</h3>
        <p className="text-sm text-muted-foreground">Content for the third section.</p>
      </div>
    </div>
  ),
}

export const VerticalInContext: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-32">
      <div className="text-sm">Left</div>
      <Separator orientation="vertical" className="h-full" />
      <div className="text-sm">Center</div>
      <Separator orientation="vertical" className="h-full" />
      <div className="text-sm">Right</div>
    </div>
  ),
}
