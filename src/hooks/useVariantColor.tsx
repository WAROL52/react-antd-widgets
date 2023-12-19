"use client";

import clsx from "clsx";
import {
  VariantClassName,
  VariantModeType,
  VariantProps,
  VariantThemeLevelType,
  WidgetColorLevelType,
  WidgetColorType,
} from "../type";

export type useVariantColorProps = VariantProps & {
  isHoverable?: boolean;
  isClicable?: boolean;
};

export function useVariantColor({
  variantBg,
  variantBgLevel,
  variantColor,
  variantColorLevel,
  variantThemeColor = "slate",
  variantThemeLevel = 1,
  variantMode = "light",
  isClicable,
  isHoverable,
}: useVariantColorProps) {
  const theme = useTheme(variantThemeColor, variantThemeLevel, variantMode);
  if (!variantColor) {
    variantColor = theme.color;
  }
  if (!variantColorLevel) {
    variantColorLevel = theme.textLevel;
  }
  if (!variantBg) {
    variantBg = theme.color;
  }
  if (!variantBgLevel) {
    variantBgLevel = theme.bgLevel;
  }
  const textColorClassName = useTextColor(variantColor, variantColorLevel);
  const bgColorClassName = useBgColor(variantBg, variantBgLevel);
  const isHoverableClassName = isHoverable
    ? `hover:ui-bg-${variantBg}-${
        variantBgLevel + (variantBgLevel === 50 ? 50 : 100)
      } hover:ui-shadow-lg`
    : "";
  const isClicableClassName = isClicable
    ? "ui-cursor-pointer ui-select-none "
    : "";

  const className = clsx(
    textColorClassName,
    bgColorClassName,
    isHoverableClassName,
    isClicableClassName
  );

  const themeClassName = clsx(
    `ui-text-${theme.color}-${theme.textLevel} ui-bg-${theme.color}-${theme.bgLevel}`
  );
  return {
    ...theme,
    className,
    textColorClassName,
    bgColorClassName,
    isHoverableClassName,
    isClicableClassName,
    themeClassName,
  } as VariantClassName;
}
function useTheme(
  color: WidgetColorType,
  level: VariantThemeLevelType,
  mode: VariantModeType
) {
  let textLevel: WidgetColorLevelType = 950;
  let bgLevel: WidgetColorLevelType = 50;
  const levelData =
    mode == "light" ? levelLightConfig[level] : levelDarkConfig[level];
  if (levelData) {
    textLevel = levelData.textLevel;
    bgLevel = levelData.bgLevel;
  }
  return {
    color,
    textLevel,
    bgLevel,
  };
}
type LevelData = {
  textLevel: WidgetColorLevelType;
  bgLevel: WidgetColorLevelType;
};
const levelLightConfig: Record<VariantThemeLevelType, LevelData> = {
  "0": {
    bgLevel: 100,
    textLevel: 950,
  },
  "1": {
    bgLevel: 200,
    textLevel: 950,
  },
  "2": {
    bgLevel: 300,
    textLevel: 900,
  },
  "3": {
    bgLevel: 400,
    textLevel: 900,
  },
  "4": {
    bgLevel: 500,
    textLevel: 100,
  },
  "5": {
    bgLevel: 600,
    textLevel: 50,
  },
};
const levelDarkConfig: Record<VariantThemeLevelType, LevelData> = {
  "0": {
    bgLevel: 900,
    textLevel: 50,
  },
  "1": {
    bgLevel: 800,
    textLevel: 50,
  },
  "2": {
    bgLevel: 700,
    textLevel: 100,
  },
  "3": {
    bgLevel: 600,
    textLevel: 100,
  },
  "4": {
    bgLevel: 500,
    textLevel: 100,
  },
  "5": {
    bgLevel: 400,
    textLevel: 50,
  },
};
function useTextColor(color: WidgetColorType, level: WidgetColorLevelType) {
  const textColorClassName = `ui-text-${color}-${level}` as const;
  return textColorClassName;
}
function useBgColor(
  variantBg: WidgetColorType,
  variantBgLevel: WidgetColorLevelType
) {
  const bgColorClassName = `ui-bg-${variantBg}-${variantBgLevel}` as const;
  return bgColorClassName;
}
