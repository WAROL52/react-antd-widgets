"use client";

import { motion } from "framer-motion";
import { VariantProps, WidgetProps } from "../type";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import { Card, Flex, Popover, Space } from "antd";
import Meta from "antd/es/card/Meta";
import { LoadingOutlined } from "@ant-design/icons";
import { useVariantColor } from "../hooks/useVariantColor";
import { useMotionProps } from "../hooks/useMotionProps";

export type WidgetRowProps = WidgetProps &
  VariantProps &
  PropsWithChildren<{
    description?: ReactNode;
    extra?: ReactNode;
  }>;

const CardMotion = motion.div;

export function WidgetRow({
  className,
  children,
  icon,
  isClicable,
  isFetching,
  isHoverable,
  isLoading,
  motionProps,
  popoverProps,
  description,
  extra,
  ...variantProps
}: WidgetRowProps) {
  if (popoverProps) {
    children = <Popover {...popoverProps}>{children}</Popover>;
  }
  const defaultMotionProps = useMotionProps({ isClicable, isHoverable });
  const {
    className: variantClassName,
    bgColorClassName,
    textColorClassName,
    textLevel,
    color,
  } = useVariantColor({
    isClicable,
    isHoverable,

    ...variantProps,
  });
  const textLevelComputed = textLevel - 100 < 100 ? 200 : textLevel - 100;
  return (
    <CardMotion
      {...defaultMotionProps}
      {...motionProps}
      className={clsx("ui-rounded-lg", className, variantClassName)}
    >
      <Card
        loading={isLoading}
        className={clsx(bgColorClassName, textColorClassName)}
      >
        <Flex justify="space-between" align="center">
          <Meta
            avatar={icon}
            title={
              <Space size={3} className={clsx(textColorClassName)}>
                {isFetching && <LoadingOutlined />}
                {children}
              </Space>
            }
            description={
              <div className={clsx(`ui-text-${color}-${textLevelComputed}`)}>
                {description}
              </div>
            }
          />
          <Space>{extra}</Space>
        </Flex>
      </Card>
    </CardMotion>
  );
}
