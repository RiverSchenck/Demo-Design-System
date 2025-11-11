import { Button } from "./Button"
import figma from "@figma/code-connect"

figma.connect(
  Button,
  "https://www.figma.com/design/8AQj34ysfReEm8l3z7asLu/DevMode-Demo?node-id=22%3A8",
  {
    props: {
      disabled: figma.enum("State", { Disabled: true }),
      children: figma.string("Label"),
      showLeadingIcon: figma.boolean("Show Leading Icon"),
      leadingIcon: figma.instance("Leading Icon"),
      showTrailingIcon: figma.boolean("Show Trailing Icon"),
      trailingIcon: figma.instance("Trailing Icon"),
      showLabel: figma.boolean("Show Label"),
      styleType: figma.enum("Style", {
        Default: "default",
        "New York": "new-york",
      }),
      variant: figma.enum("Variant", {
        Default: "default",
        Destructive: "destructive",
        Outline: "outline",
        Secondary: "secondary",
        Ghost: "ghost",
        Link: "link",
      }),
      size: figma.enum("Size", {
        Default: "default",
        Small: "sm",
        Large: "lg",
        Icon: "icon",
      }),
    },
    example: (props) => (
      <Button
        disabled={props.disabled}
        variant={props.variant}
        size={props.size}
        styleType={props.styleType}
        leadingIcon={props.leadingIcon}
        trailingIcon={props.trailingIcon}
        showLeadingIcon={props.showLeadingIcon}
        showTrailingIcon={props.showTrailingIcon}
        showLabel={props.showLabel}
      >
        {props.children}
      </Button>
    ),
  })
