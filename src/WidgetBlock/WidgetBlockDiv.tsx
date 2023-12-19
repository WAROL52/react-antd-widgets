"use client";

import { motion } from "framer-motion";
import { WidgetBlockProps } from "./WidgetBlock";
import { useVariantColor } from "../hooks/useVariantColor";
import clsx from "clsx";
import { useMotionProps } from "../hooks/useMotionProps";
import { Empty, Spin } from "antd";
import { WidgetTitle } from "./WidgetTitle";
import { VariantColorProvider } from "../contexts/VariantColorContext";

export type WidgetBlockDivProps = WidgetBlockProps;

export function WidgetBlockDiv({ children, ...props }: WidgetBlockDivProps) {
  const { className, ...variantClassName } = useVariantColor(props);
  const motionProps = useMotionProps(props);

  if (props.open !== true) return <Empty />;

  return (
    <motion.div {...motionProps} className={clsx(className, "ui-rounded-lg")}>
      <VariantColorProvider
        variantClassName={{ className, ...variantClassName }}
      >
        <Spin spinning={!!props.isLoading} tip={props.loadingText}>
          <WidgetTitle {...props} />
          <div style={{ padding: "5px 10px" }}>{children}</div>
        </Spin>
      </VariantColorProvider>
    </motion.div>
  );
}
