"use client";

import { Button, ButtonProps, Empty, Space } from "antd";
import { WidgetRow } from "../WidgetRow/WidgetRow";
import { WidgetBlockProps } from "./WidgetBlock";
import { CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import { clsx } from "clsx";
import { useCurrentVariantColor } from "../hooks/useCurrentVariantColor";

export type WidgetTitleProps = WidgetBlockProps & {
  btnCloseProps?: ButtonProps;
};

export function WidgetTitle(props: WidgetTitleProps) {
  const { color, textLevel, bgLevel } = useCurrentVariantColor();

  let extra = props.extra;
  const variantBgLevel = (
    bgLevel + 200 > 900 ? (bgLevel === 800 ? 900 : 800) : bgLevel + 200
  ) as 50;
  if (props.open !== true) return <Empty />;

  if (props.onClose instanceof Function) {
    extra = (
      <Space>
        {props.extra}
        <Button
          {...props.btnCloseProps}
          //   className={clsx(`ui-text-${color}-${textLevel}`)}
          onClick={() => props?.onClose?.()}
          size="small"
          danger
          icon={<CloseOutlined />}
        />
      </Space>
    );
  }
  const hasTitle = !!props.title || !!extra;
  if (!hasTitle) return null;
  return (
    <WidgetRow
      variantBg={color}
      variantBgLevel={variantBgLevel}
      icon={props.isFetching ? <LoadingOutlined /> : props.icon}
      variantColorLevel={textLevel}
      variantColor={color}
      description={
        <div className={clsx(`ui-text-${color}-${textLevel}`)}>
          {props.description}
        </div>
      }
      extra={extra}
      {...props.titleProps}
      className={clsx(props.className)}
    >
      {props.title}
    </WidgetRow>
  );
}
