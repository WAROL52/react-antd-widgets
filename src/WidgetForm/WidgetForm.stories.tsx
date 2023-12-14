import { Meta, StoryObj } from "@storybook/react";
import { WidgetForm } from "./WidgetForm";
import { argTypesVariant } from "../stories/variantStories";

const meta: Meta<typeof WidgetForm> = {
  title: "Widget/Form",
  tags: ["autodocs"],
  component: WidgetForm,
  argTypes: {
    ...argTypesVariant,
  },
  args: {
    onClose: undefined,
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
