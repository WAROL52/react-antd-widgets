import { Meta, StoryObj } from "@storybook/react";
import { Field } from "../Fields";
import { WidgetForm } from "../WidgetForm";
import { FieldTemplate, fieldMeta } from "./_FieldMeta";

const meta: Meta<typeof WidgetForm> = {
  title: "Widget/Form/Cascader",
  ...fieldMeta,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: FieldTemplate,
  args: {
    children: <Field.Cascader label="Username" name={"username"} />,
  },
};
