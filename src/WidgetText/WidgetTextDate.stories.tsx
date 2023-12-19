import { Meta, StoryObj } from "@storybook/react";
import { WidgetTextDate } from "./WidgetTextDate";
import { argTypesVariant } from "../stories/variantStories";

const meta: Meta<typeof WidgetTextDate> = {
  title: "Widget/Text/Date",
  component: WidgetTextDate,
  tags: ["autodocs"],
  argTypes: { ...argTypesVariant },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    date: new Date(),
  },
};

export const ModeText: Story = {
  args: {
    mode: "text",
    date: new Date(),
  },
};

export const ModeInput: Story = {
  args: {
    mode: "input",
    date: new Date(),
  },
};
