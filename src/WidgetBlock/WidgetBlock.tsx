"use client";
import { PropsWithChildren, ReactNode } from "react";
import "../index.css";
import { WidgetProps } from "../type";
import { WidgetRowProps } from "../WidgetRow/WidgetRow";
import { WidgetBlockDiv } from "./WidgetBlockDiv";
import { WidgetBlockCard } from "./WidgetBlockCard";
import { WidgetBlockDrawer } from "./WidgetBlockDrawer";
import { WidgetBlockModal } from "./WidgetBlockModal";
export type WidgetBlockType = "div" | "card" | "modal" | "drawer";
export type WidgetBlockProps = PropsWithChildren<
  {
    type?: WidgetBlockType;
    open?: boolean;
    onClose?: () => void;
    title?: ReactNode;
    extra?: ReactNode;
    titleProps?: WidgetRowProps;
  } & WidgetProps
>;

export function WidgetBlock({ children, type, ...props }: WidgetBlockProps) {
  if (type === "card")
    return <WidgetBlockCard {...props}>{children}</WidgetBlockCard>;
  if (type === "drawer")
    return <WidgetBlockDrawer {...props}>{children}</WidgetBlockDrawer>;
  if (type === "modal")
    return <WidgetBlockModal {...props}>{children}</WidgetBlockModal>;
  return <WidgetBlockDiv {...props}>{children}</WidgetBlockDiv>;
}
