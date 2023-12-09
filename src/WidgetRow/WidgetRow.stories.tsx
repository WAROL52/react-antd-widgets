import { Meta, StoryObj } from "@storybook/react";
import { WidgetRow } from "./WidgetRow";

const meta: Meta<typeof WidgetRow> = {
  title: "Widget/Row",
  component: WidgetRow,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "default args is Text",
  },
};
