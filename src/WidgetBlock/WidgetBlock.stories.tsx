import { Meta, StoryObj } from "@storybook/react";
import { WidgetBlock } from "./WidgetBlock";
import { argTypesVariant } from "../stories/variantStories";

const meta: Meta<typeof WidgetBlock> = {
  title: "Widget/Block",
  tags: ["autodocs"],
  component: WidgetBlock,
  argTypes: argTypesVariant,
};
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "default args is Text",
  },
};
