import { placeholderImage } from "@/ui/images"
import { Avatar } from "./Avatar"
import figma from "@figma/code-connect"

figma.connect(
  Avatar,
  "https://www.figma.com/design/8AQj34ysfReEm8l3z7asLu/DevMode-Demo?node-id=4403-5160&t=xhPR88POs8ITfqkN-4",
  {
    props: {
      size: figma.enum("Size", {
        xxs: "xxs",
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
      }),
      shape: figma.enum("shape", {
        Circle: "circle",
        Square: "square",
      }),
      hasNotification: figma.boolean("notification"),
      notificationPosition: figma.enum("notification position", {
        Top: "top",
        Bottom: "bottom",
      }),
      type: figma.enum("Content", {
        Image: "image",
        Initial: "initial",
        Placeholder: "placeholder",
      }),
      src: figma.enum("Content", {
        Image: placeholderImage,
      }),
      initials: figma.enum("Content", {
        Initial: figma.string("Initials"),
      }),
    },
    example: (props) => (
      <Avatar  {...props} />
    ),
  },
)
