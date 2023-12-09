"use client";
import "../index.css";
import { PropsWithChildren, ReactNode } from "react";
import { Popover, Space, Spin, Tag, TagProps, Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
import { MotionProps, motion } from "framer-motion";
import { TitleProps } from "antd/es/typography/Title";
import { ParagraphProps } from "antd/es/typography/Paragraph";
import { LinkProps } from "antd/es/typography/Link";
import { VariantProps, WidgetProps } from "../type";
import clsx from "clsx";
import { LoadingOutlined } from "@ant-design/icons";
import { WidgetTextDate } from "./WidgetTextDate";
import { useVariantColor } from "../hooks/useVariantColor";
export type WidgetTextType = "Title" | "Paragraph" | "Text" | "Link" | "Tag";

export type WidgetTextTypeProps = {
  textProps?: TextProps;
  tagProps?: TagProps;
  titleProps?: TitleProps;
  paragraphProps?: ParagraphProps;
  linkProps?: LinkProps;
};

export type WidgetTextProps = PropsWithChildren<
  WidgetTextTypeProps &
    WidgetProps &
    VariantProps & {
      type?: WidgetTextType;
    }
>;
const blockList = ["Title", "Paragraph"];
export function WidgetText({
  children: defaultChildren,
  ...props
}: WidgetTextProps) {
  const content = <TextContent {...props}>{defaultChildren}</TextContent>;
  const layout = blockList.includes(props.type || "") ? "div" : "span";
  let children = (
    <TextContainer layout={layout} {...props}>
      {content}
    </TextContainer>
  );
  if (props.popoverProps)
    children = <Popover {...props.popoverProps}> {children} </Popover>;
  return children;
}
WidgetText.Date = WidgetTextDate;

function TextContent({ ...props }: WidgetTextProps) {
  const { className: themeClassName } = useVariantColor(props);
  const className = clsx(props.className, themeClassName);
  if (props.type === "Text")
    return (
      <Typography.Text {...props.textProps} className={className}>
        {props.children}{" "}
      </Typography.Text>
    );
  if (props.type === "Link")
    return (
      <Typography.Link {...props.linkProps} className={className}>
        {props.children}{" "}
      </Typography.Link>
    );
  if (props.type === "Paragraph")
    return (
      <Typography.Paragraph {...props.paragraphProps} className={className}>
        {props.children}
      </Typography.Paragraph>
    );
  if (props.type === "Title")
    return (
      <Typography.Title {...props.titleProps} className={className}>
        {props.children}
      </Typography.Title>
    );
  if (props.type === "Tag")
    return (
      <Tag {...props.titleProps} className={className}>
        {props.children}
      </Tag>
    );
  return (
    <Typography.Text {...props.textProps} className={className}>
      {props.children}{" "}
    </Typography.Text>
  );
}
type TextContainerProps = PropsWithChildren<{
  icon?: ReactNode;
  isLoading?: boolean;
  isFetching?: boolean;
  loadingText?: ReactNode;
  isHoverable?: boolean;
  isClicable?: boolean;
  motionProps?: MotionProps;
  layout?: "div" | "span";
}>;
function TextContainer({
  children,
  motionProps,
  icon,
  isLoading,
  isFetching,
  loadingText,
  isClicable,
  isHoverable,
  layout = "div",
}: TextContainerProps) {
  if (isLoading || isFetching) {
    children =
      layout === "span" && isLoading ? loadingText || children : children;
    icon = <LoadingOutlined />;
  }
  const defaultMotionProps: MotionProps = {
    whileHover: isHoverable ? { scale: 1.01 } : undefined,
    whileTap: isClicable ? { scale: 0.999 } : undefined,
  };

  if (layout === "span")
    return (
      <motion.span {...defaultMotionProps} {...motionProps}>
        <Space size={3}>
          {icon}
          {children}
        </Space>
      </motion.span>
    );
  return (
    <motion.div {...defaultMotionProps} {...motionProps}>
      {!isLoading && (
        <Space>
          {icon} {isFetching && loadingText}
        </Space>
      )}
      <Spin spinning={isLoading} tip={loadingText}>
        {children}
      </Spin>
    </motion.div>
  );
}
