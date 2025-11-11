import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card"
import figma from "@figma/code-connect"

figma.connect(
  Card,
  "https://www.figma.com/design/8AQj34ysfReEm8l3z7asLu/DevMode-Demo?node-id=2222%3A7235",
  {
    props: {
      type: figma.enum("Type", {
        Default: "default",
        "Content Only": "content-only",
      }),
      style: figma.enum("Style", {
        Default: "default",
        "New York": "new-york",
      }),
      showContent: figma.boolean("Show Content"),
      showFooter: figma.boolean("Show Footer"),
      title: figma.string("Title"),
      description: figma.string("Description"),

      // These correspond to Figma slots
      slotContent: figma.children("Slot <Content>"),
      slotFooter: figma.children("Slot <Footer>"),
    },
    example: (props) => (
      <Card data-type={props.type} data-style={props.style} showContent={props.showContent} showFooter={props.showFooter}>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent>{props.slotContent}</CardContent>
        <CardFooter>{props.slotFooter}</CardFooter>
      </Card>
    ),
  },
)
