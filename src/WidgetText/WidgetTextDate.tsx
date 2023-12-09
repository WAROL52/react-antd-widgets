"use client";

import dayjs from "dayjs";
import { WidgetText } from "./WidgetText";
import { Calendar, DatePicker, theme } from "antd";

export type WidgetTextDateProps = {
  date: Date;
  format?: string;
  mode?: "text" | "input";
};

export function WidgetTextDate({
  date,
  format = "DD/MM/YYYY HH:mm:ss",
  mode = "text",
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
