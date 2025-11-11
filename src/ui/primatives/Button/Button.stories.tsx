import type { Meta, StoryObj } from "@storybook/react"
import { ArrowRight, Check, Loader2, Upload } from "lucide-react"

import { Button } from "./Button"

const iconOptions = {
  None: undefined,
  Upload: <Upload className="size-4" />,
  ArrowRight: <ArrowRight className="size-4" />,
  Check: <Check className="size-4" />,
  Loader: <Loader2 className="size-4 animate-spin" />,
}

const meta = {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
    leadingIcon: iconOptions.None,
    trailingIcon: iconOptions.None,
    showLeadingIcon: true,
    showTrailingIcon: true,
    showLabel: true,
    styleType: "default",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg", "icon", "icon-sm", "icon-lg"],
    },
    styleType: {
      control: { type: "radio" },
      options: ["default", "new-york"],
    },
    leadingIcon: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: { type: "radio" },
    },
    trailingIcon: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: { type: "radio" },
    },
    onClick: { action: "clicked" },
    className: { control: false },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Primary: Story = {
  args: {
    variant: "default",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
  },
}

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: iconOptions.Upload,
  },
}

export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: iconOptions.ArrowRight,
  },
}

export const Loading: Story = {
  args: {
    leadingIcon: iconOptions.Loader,
    disabled: true,
    children: "Submitting",
  },
}

export const IconOnly: Story = {
  args: {
    size: "icon",
    showLabel: false,
    children: <ArrowRight className="size-4" />,
    "aria-label": "Next",
  },
}

export const NewYorkStyle: Story = {
  args: {
    styleType: "new-york",
    variant: "secondary",
  },
}

export const AsLink: Story = {
  render: () => (
    <Button asChild variant="link">
      <a href="#" className="inline-flex items-center gap-2">
        View documentation
        <ArrowRight className="size-4" />
      </a>
    </Button>
  ),
}
