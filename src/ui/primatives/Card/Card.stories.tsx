import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "./Card"
import { Button } from "../Button/Button"

const meta = {
  title: "Primitives/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    showContent: true,
    showFooter: true,
  },
  argTypes: {
    showContent: {
      control: { type: "boolean" },
      description: "Toggle card content visibility",
    },
    showFooter: {
      control: { type: "boolean" },
      description: "Toggle card footer visibility",
    },
    className: { control: false },
    children: { control: false },
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Card className="w-[360px]" {...args}>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Short description goes here.</CardDescription>
        <CardAction>
          <Button size="sm">Action</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Here is some content inside the card body.</p>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Secondary</Button>
      </CardFooter>
    </Card>
  ),
}

export const Default: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Short description goes here.</CardDescription>
        <CardAction>
          <Button size="sm">Action</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Here is some content inside the card body.</p>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Secondary</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
        <CardDescription>No action button or footer.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Just the essentials.</p>
      </CardContent>
    </Card>
  ),
}

export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Header Only</CardTitle>
        <CardDescription>This card has no content or footer.</CardDescription>
      </CardHeader>
    </Card>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card with Long Content</CardTitle>
        <CardDescription>This demonstrates how the card handles longer text.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Learn More</Button>
        <Button>Get Started</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithoutContent: Story = {
  args: {
    showContent: false,
  },
  render: (args) => (
    <Card className="w-[360px]" {...args}>
      <CardHeader>
        <CardTitle>No Content</CardTitle>
        <CardDescription>Content section is hidden.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This content won't be visible.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithoutFooter: Story = {
  args: {
    showFooter: false,
  },
  render: (args) => (
    <Card className="w-[360px]" {...args}>
      <CardHeader>
        <CardTitle>No Footer</CardTitle>
        <CardDescription>Footer section is hidden.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content here.</p>
      </CardContent>
      <CardFooter>
        <Button>This footer won't be visible</Button>
      </CardFooter>
    </Card>
  ),
}
