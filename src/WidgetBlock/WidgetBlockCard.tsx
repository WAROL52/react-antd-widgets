"use client";

import { Card } from "antd";
import { WidgetBlockProps } from "./WidgetBlock";
import { WidgetBlockDiv } from "./WidgetBlockDiv";

export type WidgetBlockCardProps = WidgetBlockProps;

export function WidgetBlockCard({ children, ...props }: WidgetBlockCardProps) {
  return (
    <Card
      loading={!!props.isLoading}
      bodyStyle={{ padding: 0 }}
      headStyle={{ padding: 0 }}
      {...props.cardProps}
    >
      <WidgetBlockDiv {...props}>{children}</WidgetBlockDiv>
    </Card>
  );
}
