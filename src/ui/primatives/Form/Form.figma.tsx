import React from "react"
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "./Form"
import { Input } from "../Input/Input"
import figma from "@figma/code-connect"

figma.connect(
  FormItem,
  "https://www.figma.com/design/8AQj34ysfReEm8l3z7asLu/DevMode-Demo?node-id=1603%3A4508",
  {
    props: {
      style: figma.enum("Style", {
        Default: "Default",
        "New York": "New York",
      }),
      variant: figma.enum("Variant", {
        Default: "Default",
        Inline: "Inline",
      }),
      description: figma.string("Description"),

      // The slot for any input element (text field, select, etc.)
      slotField: figma.children("Slot"),
    },
    example: (props) => {
      // Ensure slotField is a single element or use Input as fallback
      const fieldElement = React.Children.count(props.slotField) === 1
        ? props.slotField
        : <Input placeholder="Enter text" />

      return (
        <FormItem data-style={props.style} data-variant={props.variant}>
          <FormLabel>Label</FormLabel>
          <FormControl>{fieldElement}</FormControl>
          <FormDescription>{props.description}</FormDescription>
        </FormItem>
      )
    },
  },
)
