"use client";

import { FormProps } from "antd";
import { WidgetBlock, WidgetBlockProps } from "../WidgetBlock/WidgetBlock";
import Form, { useForm } from "antd/es/form/Form";
import clsx from "clsx";
import { useVariantColor } from "../hooks/useVariantColor";

export type WidgetFormProps = FormProps &
  Partial<WidgetBlockProps> & {
    formClassName?: string;
  };

export function WidgetForm({
  children,
  open = true,
  formClassName,
  form: _form,
  ...props
}: WidgetFormProps) {
  const [form] = useForm(_form);
  const { className } = useVariantColor(props);
  return (
    <WidgetBlock {...props} open={open}>
      <Form
        layout="vertical"
        {...props}
        className={clsx(className, formClassName)}
        form={form}
      >
        {children as string}
      </Form>
    </WidgetBlock>
  );
}
