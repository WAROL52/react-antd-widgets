"use client";

import { FormProps } from "antd";
import { WidgetBlock, WidgetBlockProps } from "../WidgetBlock/WidgetBlock";
import Form from "antd/es/form/Form";

export type WidgetFormProps = FormProps &
  Partial<WidgetBlockProps> & {
    formClassName?: string;
  };

export function WidgetForm({
  children,
  open = true,
  formClassName,
  ...props
}: WidgetFormProps) {
  return (
    <WidgetBlock {...props} open={open}>
      <Form layout="vertical" {...props} className={formClassName}>
        {children as string}
      </Form>
    </WidgetBlock>
  );
}
