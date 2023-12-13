"use client";

import {
  Button,
  ButtonProps,
  Popconfirm,
  PopconfirmProps,
  Popover,
  PopoverProps,
  Tooltip,
  TooltipProps,
} from "antd";
import { VariantProps, WidgetProps } from "../type";
import { useVariantColor } from "../hooks/useVariantColor";
import clsx from "clsx";

export type WidgetButtonProps = ButtonProps &
  WidgetProps &
  VariantProps & {
    confirmProps?: PopconfirmProps;
    popoverProps?: PopoverProps;
    tooltipProps?: TooltipProps;
  };

export function WidgetButton({
  children,
  confirmProps,
  popoverProps,
  tooltipProps,
  ...buttonProps
}: WidgetButtonProps) {
  const { className } = useVariantColor(buttonProps);
  const isLoading =
    !!buttonProps.loading ||
    !!buttonProps.isLoading ||
    !!buttonProps.isFetching;
  if (isLoading && !buttonProps.isFetching)
    children = buttonProps.loadingText || children;

  let btnElement = (
    <Button
      {...buttonProps}
      className={clsx(className, buttonProps.className)}
      loading={isLoading}
    >
      {children}
    </Button>
  );
  if (confirmProps) {
    btnElement = (
      <Popconfirm
        {...confirmProps}
        okButtonProps={{
          className: confirmProps.okButtonProps?.className || className,
        }}
      >
        {btnElement}
      </Popconfirm>
    );
  }
  if (popoverProps) {
    btnElement = <Popover {...popoverProps}>{btnElement}</Popover>;
  }
  if (tooltipProps) {
    btnElement = <Tooltip {...tooltipProps}>{btnElement}</Tooltip>;
  }
  return btnElement;
}
