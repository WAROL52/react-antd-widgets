import { Meta, StoryObj } from "@storybook/react";
import { Field } from "../Fields";
import { WidgetForm } from "../WidgetForm";
import { FieldTemplate, fieldMeta } from "./_FieldMeta";

const meta: Meta<typeof WidgetForm> = {
  title: "Widget/Form/Search",
  ...fieldMeta,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: FieldTemplate,
  args: {
    children: <Field.Search label="Username" name={"username"} />,
  },
};
