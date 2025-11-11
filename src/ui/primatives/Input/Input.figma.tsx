import { Input } from "./Input"
import figma from "@figma/code-connect"

figma.connect(
  Input,
  "https://www.figma.com/design/8AQj34ysfReEm8l3z7asLu/DevMode-Demo?node-id=1243%3A2056",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      placeholder: figma.string("Placeholder"),
      typeVariant: figma.enum("Type", {
        Text: "text",
        File: "file",
      }),
      styleType: figma.enum("Style", {
        Default: "default",
        "New York": "new-york",
      }),
    },
    example: (props) => <Input {...props} />,
  },
)
