import { Badge } from "./Badge"
import figma from "@figma/code-connect"

figma.connect(
  Badge,
  "https://www.figma.com/design/8AQj34ysfReEm8l3z7asLu/DevMode-Demo?node-id=26%3A57",
  {
    props: {
      variant: figma.enum("Variant", {
        Default: "default",
        Secondary: "secondary",
        Outline: "outline",
        Destructive: "destructive",
      }),
      style: figma.enum("Style", {
        Default: "default",
        "New York": "new-york",
      }),
      dot: figma.boolean("dot"),
      label: figma.string("Label"),
    },
    example: (props) => (
      <Badge variant={props.variant} style={props.style} dot={props.dot}>
        {props.label}
      </Badge>
    ),
  },
)
