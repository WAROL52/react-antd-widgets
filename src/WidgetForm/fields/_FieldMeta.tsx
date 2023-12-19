/* eslint-disable react-refresh/only-export-components */
import { Meta, StoryObj } from "@storybook/react";
import { argTypesVariant } from "../../stories/variantStories";
import { Field } from "../Fields";
import { WidgetForm, WidgetFormProps } from "../WidgetForm";

export const fieldMeta: Meta<typeof WidgetForm> = {
  tags: ["autodocs"],
  component: WidgetForm,

  argTypes: {
    ...argTypesVariant,
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onClose: undefined,
    onFinish: (value) => alert(JSON.stringify(value, null, 2)),
    children: null,
  },
};

export type FieldStory = StoryObj<typeof fieldMeta>;

export function FieldTemplate({ children, ...props }: WidgetFormProps) {
  return (
    <WidgetForm {...props}>
      {children}
      <Field.SubmitButon />
    </WidgetForm>
  );
}
