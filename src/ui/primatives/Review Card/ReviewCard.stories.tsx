import type { Meta, StoryObj } from "@storybook/react"
import { ReviewCard } from "./ReviewCard"

const meta = {
  title: "Compositions/ReviewCard",
  component: ReviewCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ReviewCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Fantastic Product",
    review:
      "I’ve been using this for weeks and it’s been a game-changer. Highly recommend!",
    reviewer: "Jane Doe",
    date: "2025-11-01",
    rating: 4,
  },
}

export const WithAvatar: Story = {
  args: {
    title: "Love it",
    review: "Super smooth and easy to use.",
    reviewer: "John Smith",
    date: "2025-10-22",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
}
