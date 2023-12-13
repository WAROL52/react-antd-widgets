import { ArgTypes } from "@storybook/react";
import {
  widgetColors,
  widgetColorLevel,
  WidgetProps,
  VariantProps,
} from "../type";

export const argTypesVariant: Partial<ArgTypes<WidgetProps & VariantProps>> = {
  className: {
    type: "string",
  },
  variantMode: {
    defaultValue: "light",
    control: "inline-radio",
    options: ["light", "dark"],
  },
  variantThemeColor: {
    defaultValue: "slate",
    control: "select",
    options: widgetColors,
  },
  variantThemeLevel: {
    defaultValue: 1,
    control: "inline-radio",
    options: [0, 1, 2, 3, 4, 5],
  },
  variantBg: {
    defaultValue: "slate",
    control: "select",
    options: widgetColors,
  },
  variantColor: {
    defaultValue: "slate",
    control: "select",
    options: widgetColors,
  },
  variantBgLevel: {
    defaultValue: 50,
    control: "select",
    options: widgetColorLevel,
  },
  variantColorLevel: {
    defaultValue: 950,
    control: "select",
    options: widgetColorLevel,
  },
  loadingText: {
    type: "string",
  },
  isLoading: {
    type: "boolean",
    defaultValue: false,
  },
  isFetching: {
    type: "boolean",
    defaultValue: false,
  },
  isClicable: {
    type: "boolean",
    defaultValue: false,
  },
  isHoverable: {
    type: "boolean",
    defaultValue: false,
  },
};
