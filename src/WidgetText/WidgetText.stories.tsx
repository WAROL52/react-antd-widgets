import type { Meta, StoryObj } from "@storybook/react";
import { WidgetText } from "./WidgetText";
import { argTypesVariant } from "../stories/variantStories";

const meta: Meta<typeof WidgetText> = {
  title: "Widget/Text/Text",
  component: WidgetText,
  tags: ["autodocs"],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  argTypes: { ...argTypesVariant },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "default args is Text",
  },
};
export const Text: Story = {
  args: {
    type: "Text",
    textProps: {},
    children: "Lorem ipsum dolor sit amet.",
  },
};
export const Link: Story = {
  args: {
    type: "Link",
    linkProps: {},
    children: "Lorem ipsum dolor sit amet.",
  },
};
export const Paragraph: Story = {
  args: {
    type: "Paragraph",
    paragraphProps: {},
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci deleniti facere maxime repellat placeat? Molestiae esse culpa deserunt quidem.",
  },
};
export const Title: Story = {
  args: {
    type: "Title",
    titleProps: {},
    children: "Lorem ipsum dolor sit amet.",
  },
};
export const Tag: Story = {
  args: {
    type: "Tag",
    tagProps: {},
    children: "Lorem ipsum dolor sit amet.",
  },
};
export const WithPopover: Story = {
  args: {
    popoverProps: {
      content: " consectetur adipisicing elit. Repudiandae, totam.",
    },
    children: "Lorem ipsum dolor sit amet.",
  },
};
export const WithTooltip: Story = {
  args: {
    children: "consectetur adipisicing elit. Repudiandae, totam.",
    tooltipProps: {
      title: "Je suis un Tooltip",
      color: "blue",
    },
  },
};
