import React from "react"
import { Label } from "./Label"
import figma from "@figma/code-connect"

figma.connect(
  Label,
  "https://www.figma.com/design/8AQj34ysfReEm8l3z7asLu/DevMode-Demo?node-id=313%3A648",
  {
    props: {
      label: figma.string("Label"),
    },
    example: (props) => <Label>{props.label}</Label>,
  },
)
