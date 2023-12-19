"use client";
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/rules-of-hooks */

import {
  AutoComplete,
  AutoCompleteProps,
  Cascader,
  CascaderProps,
  Checkbox,
  CheckboxProps,
  ColorPicker,
  ColorPickerProps,
  DatePicker,
  DatePickerProps,
  Flex,
  FlexProps,
  Form,
  FormItemProps,
  Input,
  InputNumber,
  InputNumberProps,
  Radio,
  RadioProps,
  Rate,
  RateProps,
  Select,
  SelectProps,
  Space,
  Switch,
  SwitchProps,
  TimePicker,
  TimePickerProps,
  TreeSelect,
  TreeSelectProps,
  Upload,
  UploadProps,
} from "antd";
import { ComponentProps, FC, PropsWithChildren } from "react";
import { useCurrentVariantColor } from "../hooks/useCurrentVariantColor";
import clsx from "clsx";
import { WidgetButton, WidgetButtonProps } from "../WidgetButton/WidgetButton";
export type FieldProps = {
  AutoComplete: AutoCompleteProps;
  Cascader: CascaderProps;
  Checkbox: CheckboxProps;
  ColorPicker: ColorPickerProps;
  DatePicker: DatePickerProps;
  Input: ComponentProps<typeof Input>;
  InputNumber: InputNumberProps;
  Radio: RadioProps;
  Rate: RateProps;
  Select: SelectProps;
  Switch: SwitchProps;
  TimePicker: TimePickerProps;
  TreeSelect: TreeSelectProps;
  Upload: UploadProps;
};
export type FieldType = keyof FieldProps;

export function Field(props: FieldsProps) {
  return <Field.Text {...props} />;
}
export type FormItemWithFieldProps<T> = FormItemProps & {
  fieldProps?: T;
};
type ComputedProps<T extends PropsWithChildren, C> = {
  itemProps: FormItemProps;
  fieldProps: T | undefined;
  customProps: C;
};
function withLabel<C, T extends PropsWithChildren = PropsWithChildren>(
  Component: FC<T>,
  computedFn?: (props: ComputedProps<T, C>) => {
    itemProps: FormItemProps;
    fieldProps: T | undefined;
  }
): FC<
  FormItemProps &
    C & {
      fieldProps?: T;
    }
> {
  type FieldComponentProps = FormItemProps &
    C & {
      fieldProps?: T;
    };
  function FieldComponent(props: FieldComponentProps) {
    const { fieldProps, required = false, ...itemProps } = props;
    const { textColorClassName } = useCurrentVariantColor();
    if (itemProps.label) {
      // @ts-ignore
      itemProps.label = (
        <span className={clsx(textColorClassName)}>{itemProps.label}</span>
      );
    }
    const { fieldProps: computedFieldProps, itemProps: computedItemProps } =
      computedFn?.({
        fieldProps,
        itemProps: { ...itemProps, required },
        customProps: props,
      }) || {
        fieldProps,
        itemProps,
      };
    return (
      <Form.Item
        {...computedItemProps}
        rules={[{ required }, ...(itemProps.rules || [])]}
      >
        <Component {...(computedFieldProps as T)} />
      </Form.Item>
    );
  }
  FieldComponent.displayName = `Field${Component.displayName}`;
  return FieldComponent;
}

Field.AutoComplete = withLabel(AutoComplete);
Field.Cascader = withLabel(Cascader);
Field.Checkbox = withLabel(Checkbox, (props) => ({
  itemProps: {
    ...props.itemProps,
    initialValue: !!props.itemProps.initialValue,
    valuePropName: "checked",
    label: null,
  },
  fieldProps: {
    ...props.fieldProps,
    children: (
      <Space size={1}>
        {props.itemProps.required && <IconRequire />}
        {props.itemProps.label}
      </Space>
    ),
  },
}));
Field.ColorPicker = withLabel(ColorPicker);
Field.DatePicker = withLabel(DatePicker as unknown as FC);
Field.Text = withLabel(Input);
Field.Text.displayName = "FieldText";
Field.Password = withLabel(Input.Password);
Field.Search = withLabel(Input.Search);
Field.TextArea = withLabel(Input.TextArea);
Field.TextArea.displayName = "FieldTextArea";
Field.Number = withLabel(InputNumber);
Field.Radio = withLabel(Radio);
Field.Rate = withLabel(Rate as FC);
Field.Select = withLabel(Select);
Field.Switch = withLabel(Switch as FC);
Field.TimePicker = withLabel(TimePicker as FC);
Field.TreeSelect = withLabel(TreeSelect);
Field.Upload = withLabel(Upload);
Field.SubmitButon = withLabel(SubmitButon);
Field.SubmitButon.displayName = "FieldSubmitButon";

export type FieldsProps = ComponentProps<typeof Field.Text>;

export type SubmitButonProps = FlexProps & {
  cancelProps?: WidgetButtonProps;
  submitProps?: WidgetButtonProps;
};
function SubmitButon({
  children,
  submitProps,
  cancelProps,
  ...flexprops
}: SubmitButonProps) {
  return (
    <Flex {...flexprops}>
      {cancelProps && <WidgetButton htmlType="reset" />}
      <WidgetButton {...submitProps} htmlType="submit">
        {children || "Valider"}
      </WidgetButton>
    </Flex>
  );
}
function IconRequire() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={7}
      height={7}
      fill="currentColor"
      className="bi bi-asterisk ui-text-red-500"
      viewBox="0 0 16 16"
    >
      <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1" />
    </svg>
  );
}
