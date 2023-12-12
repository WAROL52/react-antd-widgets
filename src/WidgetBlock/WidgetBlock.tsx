"use client";
import React, { PropsWithChildren, ReactNode, useEffect } from "react";
import "../index.css";
import { VariantProps, WidgetProps } from "../type";
import { WidgetRowProps } from "../WidgetRow/WidgetRow";
import { WidgetBlockDiv } from "./WidgetBlockDiv";
import { WidgetBlockCard } from "./WidgetBlockCard";
import { WidgetBlockDrawer } from "./WidgetBlockDrawer";
import { WidgetBlockModal } from "./WidgetBlockModal";
import { CardProps, DrawerProps, ModalProps, Segmented, Space } from "antd";
import {
  ExportOutlined,
  FullscreenOutlined,
  MinusOutlined,
} from "@ant-design/icons";
export type WidgetBlockType = "div" | "card" | "modal" | "drawer";
export type WidgetBlockProps = PropsWithChildren<
  {
    type?: WidgetBlockType;
    resizable?: boolean | "makeCopy";
    open: boolean;
    onClose?: () => void;
    title?: ReactNode;
    extra?: ReactNode;
    titleProps?: WidgetRowProps;
    modalProps?: ModalProps;
    cardProps?: CardProps;
    drawerProps?: DrawerProps;
    description?: ReactNode;
  } & WidgetProps &
    VariantProps
>;

export function WidgetBlock({ children, ...propsDefault }: WidgetBlockProps) {
  const { resizableElement, ...props } = useResisableProps({
    children,
    ...propsDefault,
  });
  return (
    <WidgetBlockContainer {...props}>
      {children}
      {resizableElement}
    </WidgetBlockContainer>
  );
}
function WidgetBlockContainer({
  children,
  type = "div",
  ...props
}: WidgetBlockProps) {
  if (type === "card")
    return <WidgetBlockCard {...props}>{children}</WidgetBlockCard>;
  if (type === "drawer")
    return <WidgetBlockDrawer {...props}>{children}</WidgetBlockDrawer>;
  if (type === "modal")
    return <WidgetBlockModal {...props}>{children}</WidgetBlockModal>;
  return <WidgetBlockDiv {...props}>{children}</WidgetBlockDiv>;
}
const resizableIcon: Record<
  WidgetBlockType,
  { value: WidgetBlockType; icon: ReactNode }
> = {
  card: {
    value: "card",
    icon: <MinusOutlined />,
  },
  div: {
    value: "div",
    icon: <MinusOutlined />,
  },
  drawer: {
    value: "drawer",
    icon: <FullscreenOutlined />,
  },
  modal: {
    value: "modal",
    icon: <ExportOutlined />,
  },
};
function useResisableProps(props: WidgetBlockProps) {
  const [type, setType] = React.useState(props.type);
  useEffect(() => setType(props.type), [props.type]);
  props.type ??= "div";
  const [open, setOpen] = React.useState(false);
  let resizableElement: ReactNode = null;
  let { extra } = props;
  if (props.resizable) {
    const options = [
      { value: props.type, icon: resizableIcon[props.type].icon },
    ];
    if (props.type !== "modal") options.push(resizableIcon.modal);
    if (props.type !== "drawer") options.push(resizableIcon.drawer);
    if (props.resizable === "makeCopy") options.shift();
    extra = (
      <Space>
        {props.extra}
        <Segmented
          value={type}
          onChange={(value) => {
            setType(value as typeof props.type);
            if (props.resizable === "makeCopy") {
              return setOpen(true);
            }
          }}
          size="small"
          options={options}
        />
      </Space>
    );
  }
  if (props.resizable === "makeCopy") {
    const propsCopy = {
      ...props,
      resizable: true,
      type,
    };
    resizableElement = type !== props.type && (
      <WidgetBlock
        {...propsCopy}
        open={open}
        resizable={["div", "card"].includes(props.type)}
        type={propsCopy.type}
        onClose={() => [setOpen(false), setType(props.type || "div")]}
      />
    );
  }
  return {
    ...props,
    extra,
    type: props.resizable === "makeCopy" ? props.type : type,
    resizableElement,
  };
}
