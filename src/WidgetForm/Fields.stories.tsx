import { Meta, StoryObj } from "@storybook/react";
import { Field } from "./Fields";
import { argTypesVariant } from "../stories/variantStories";
import { WidgetForm, WidgetFormProps } from "./WidgetForm";

const meta: Meta<typeof WidgetForm> = {
  title: "Widget/Form/Fields",
  tags: ["autodocs"],
  component: WidgetForm,
  argTypes: {
    ...argTypesVariant,
  },
  args: {
    onClose: undefined,
    onFinish: (value) => alert(JSON.stringify(value, null, 2)),
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

function Template({ children, ...props }: WidgetFormProps) {
  return (
    <WidgetForm {...props}>
      {children}
      <Field.SubmitButon />
    </WidgetForm>
  );
}
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: Template,
  args: {
    children: <Field label="Username" name={"username"} />,
  },
};
export const Text: Story = {
  render: Template,
  args: {
    children: <Field.Text label="Username" name={"username"} />,
  },
};
export const TextArea: Story = {
  render: Template,
  args: {
    children: <Field.TextArea label="Description" name={"description"} />,
  },
};
export const Search: Story = {
  render: Template,
  args: {
    children: <Field.Search label="Search" name={"search"} />,
  },
};
export const Number: Story = {
  render: Template,
  args: {
    children: <Field.Number label="Number" name={"number"} />,
  },
};
export const AutoComplete: Story = {
  render: Template,
  args: {
    children: <Field.AutoComplete label="AutoComplete" name={"autoComplete"} />,
  },
};
export const Cascader: Story = {
  render: Template,
  args: {
    children: <Field.Cascader label="Cascader" name={"cascader"} />,
  },
};
export const Checkbox: Story = {
  render: Template,
  args: {
    children: <Field.Checkbox label="Checkbox" name={"Checkbox"} />,
  },
};
export const ColorPicker: Story = {
  render: Template,
  args: {
    children: <Field.ColorPicker label="ColorPicker" name={"colorPicker"} />,
  },
};
export const DatePicker: Story = {
  render: Template,
  args: {
    children: <Field.DatePicker label="DatePicker" name={"datePicker"} />,
  },
};
export const Radio: Story = {
  render: Template,
  args: {
    children: <Field.Radio label="Radio" name={"radio"} />,
  },
};
export const Rate: Story = {
  render: Template,
  args: {
    children: <Field.Rate label="Rate" name={"rate"} />,
  },
};
export const Select: Story = {
  render: Template,
  args: {
    children: <Field.Select label="Select" name={"select"} />,
  },
};
export const Switch: Story = {
  render: Template,
  args: {
    children: <Field.Switch label="Switch" name={"switch"} />,
  },
};
export const TimePicker: Story = {
  render: Template,
  args: {
    children: <Field.TimePicker label="TimePicker" name={"timePicker"} />,
  },
};
export const TreeSelect: Story = {
  render: Template,
  args: {
    children: <Field.TreeSelect label="TreeSelect" name={"TreeSelect"} />,
  },
};
export const Upload: Story = {
  render: Template,
  args: {
    children: <Field.Upload label="Upload" name={"Upload"} />,
  },
};
