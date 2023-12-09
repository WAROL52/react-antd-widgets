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

export type VariantProps = {
  variantColor?: WidgetColorType;
  variantColorLevel?: WidgetColorLevelType;
  variantBg?: WidgetColorType;
  variantBgLevel?: WidgetColorLevelType;
};
