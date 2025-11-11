import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input"

const meta = {
  title: "Primitives/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    placeholder: "Type here",
    typeVariant: "text",
    styleType: "default",
    disabled: false,
    type: "text",
  },
  argTypes: {
    typeVariant: {
      control: { type: "select" },
      options: ["text", "file"],
      description: "Input type variant",
    },
    styleType: {
      control: { type: "radio" },
      options: ["default", "new-york"],
      description: "Style variant",
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "HTML input type",
    },
    disabled: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    className: { control: false },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Text: Story = {
  args: {
    placeholder: "Type here",
    typeVariant: "text",
    type: "text",
  },
}

export const Email: Story = {
  args: {
    placeholder: "email@example.com",
    typeVariant: "text",
    type: "email",
  },
}

export const Password: Story = {
  args: {
    placeholder: "Enter password",
    typeVariant: "text",
    type: "password",
  },
}

export const Search: Story = {
  args: {
    placeholder: "Search...",
    typeVariant: "text",
    type: "search",
  },
}

export const Number: Story = {
  args: {
    placeholder: "Enter number",
    typeVariant: "text",
    type: "number",
  },
}

export const File: Story = {
  args: {
    typeVariant: "file",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
}

export const WithValue: Story = {
  args: {
    value: "Pre-filled value",
    typeVariant: "text",
  },
}

export const NewYorkStyle: Story = {
  args: {
    placeholder: "New York style",
    styleType: "new-york",
  },
}

export const Invalid: Story = {
  args: {
    placeholder: "Invalid input",
    "aria-invalid": true,
    value: "invalid@",
  },
}
