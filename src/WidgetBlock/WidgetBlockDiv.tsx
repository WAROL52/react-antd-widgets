"use client";

import { motion } from "framer-motion";
import { WidgetBlockProps } from "./WidgetBlock";
import { useVariantColor } from "../hooks/useVariantColor";
import clsx from "clsx";
import { useMotionProps } from "../hooks/useMotionProps";
import { WidgetRow } from "../WidgetRow/WidgetRow";

export type WidgetBlockDivProps = WidgetBlockProps;

export function WidgetBlockDiv({ children, ...props }: WidgetBlockDivProps) {
  const { className } = useVariantColor(props);
  const motionProps = useMotionProps(props);
  return (
    <motion.div {...motionProps} className={clsx(className)}>
      <WidgetRow {...props.titleProps}>{props.title}</WidgetRow>
      {children}
    </motion.div>
  );
}
