import { PopoverProps } from "antd";
import { MotionProps } from "framer-motion";
import { ReactNode } from "react";

export const widgetColors = [
  "rose",
  "pink",
  "fuchsia",
  "purple",
  "violet",
  "indigo",
  "blue",
  "sky",
  "cyan",
  "teal",
  "emerald",
  "green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "red",
  "stone",
  "neutral",
  "zinc",
  "gray",
  "slate",
] as const;
export const widgetColorLevel = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;
export type WidgetColorType = (typeof widgetColors)[number];
export type WidgetColorLevelType = (typeof widgetColorLevel)[number];
export type VariantThemeLevelType = 0 | 1 | 2 | 3 | 4 | 5;
export type VariantModeType = "light" | "dark";
export type VariantProps = {
  variantMode?: VariantModeType;
  variantThemeColor?: WidgetColorType;
  variantThemeLevel?: VariantThemeLevelType;
  variantColor?: WidgetColorType;
  variantColorLevel?: WidgetColorLevelType;
  variantBg?: WidgetColorType;
  variantBgLevel?: WidgetColorLevelType;
};

export type WidgetProps = {
  icon?: ReactNode;
  isLoading?: boolean;
  isFetching?: boolean;
  loadingText?: ReactNode | string;
  isHoverable?: boolean;
  isClicable?: boolean;

  popoverProps?: PopoverProps;
  motionProps?: MotionProps;
  className?: string;
};
