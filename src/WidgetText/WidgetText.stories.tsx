import type { Meta, StoryObj } from "@storybook/react";
import { WidgetText } from "./WidgetText";
import { widgetColorLevel, widgetColors } from "../type";

const meta: Meta<typeof WidgetText> = {
  title: "Widget/Text",
  component: WidgetText,
  tags: ["autodocs"],
  argTypes: {
    className: {
      type: "string",
    },
    variantMode: {
      defaultValue: "light",
      control: "inline-radio",
      options: ["light", "dark"],
    },
    variantThemeColor: {
      defaultValue: "slate",
      control: "select",
      options: widgetColors,
    },
    variantThemeLevel: {
      defaultValue: 1,
      control: "inline-radio",
      options: [0, 1, 2, 3, 4, 5],
    },
    variantBg: {
      defaultValue: "slate",
      control: "select",
      options: widgetColors,
    },
    variantColor: {
      defaultValue: "slate",
      control: "select",
      options: widgetColors,
    },
    variantBgLevel: {
      defaultValue: 50,
      control: "select",
      options: widgetColorLevel,
    },
    variantColorLevel: {
      defaultValue: 950,
      control: "select",
      options: widgetColorLevel,
    },
    loadingText: {
      type: "string",
    },
    isClicable: {
      type: "boolean",
    },
    isHoverable: {
      type: "boolean",
    },
  },
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
