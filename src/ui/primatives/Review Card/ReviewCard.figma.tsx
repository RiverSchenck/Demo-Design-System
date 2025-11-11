import { ReviewCard } from "./ReviewCard"
import figma from "@figma/code-connect"

figma.connect(
  ReviewCard,
  "https://www.figma.com/design/8AQj34ysfReEm8l3z7asLu/DevMode-Demo?node-id=2068%3A591",
  {
    props: {
      title: figma.string("Title"),
      review: figma.string("Review Body"),
      reviewer: figma.string("Reviewer"),
      date: figma.string("Date"),
      rating: figma.enum("Rating", {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
      }),
      avatar: figma.instance("Avatar"),
    },
    example: (props) => (
      <ReviewCard
        title={props.title}
        review={props.review}
        reviewer={props.reviewer}
        date={props.date}
        rating={props.rating}
      />
    ),
  },
)
