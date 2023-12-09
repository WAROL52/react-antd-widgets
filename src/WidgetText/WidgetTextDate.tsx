"use client";

import dayjs from "dayjs";
import { WidgetText } from "./WidgetText";
import { Calendar, DatePicker, theme } from "antd";
import { VariantProps, WidgetProps } from "../type";

export type WidgetTextDateProps = {
  date: Date;
  format?: string;
  mode?: "text" | "input";
} & WidgetProps &
  VariantProps;

export function WidgetTextDate({
  date,
  format = "DD/MM/YYYY HH:mm:ss",
  mode = "text",
  ...props
}: WidgetTextDateProps) {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  if (mode === "input")
    return (
      <DatePicker
        allowClear={false}
        value={dayjs(date)}
        disabledDate={(date) => date.isSame(date)}
      />
    );
  return (
    <WidgetText
      {...props}
      popoverProps={{
        content: (
          <div style={wrapperStyle}>
            <Calendar value={dayjs(date)} fullscreen={false} />
          </div>
        ),
      }}
    >
      {dayjs(date).format(format)}
    </WidgetText>
  );
}
