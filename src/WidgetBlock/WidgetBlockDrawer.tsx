"use client";

import { Drawer, Spin } from "antd";
import { WidgetBlockProps } from "./WidgetBlock";
import { motion } from "framer-motion";
import { WidgetTitle } from "./WidgetTitle";
import { useVariantColor } from "../hooks/useVariantColor";
import { clsx } from "clsx";
import { VariantColorProvider } from "../contexts/VariantColorContext";

export type WidgetBlockDrawerProps = WidgetBlockProps;

export function WidgetBlockDrawer({
  open,
  drawerProps,
  children,
  motionProps,
  onClose,
  ...props
}: WidgetBlockDrawerProps) {
  const { className, ...variantClassName } = useVariantColor(props);
  const isLoading = open && !!props.isLoading;
  return (
    <Drawer
      {...drawerProps}
      classNames={{
        ...drawerProps?.classNames,
        content: clsx(className, drawerProps?.classNames?.content),
      }}
      open={open}
      onClose={onClose}
      placement="top"
      size="large"
      closable={false}
      styles={{
        ...drawerProps?.styles,
        content: { padding: 0, ...drawerProps?.styles?.content },
        header: { padding: 0, ...drawerProps?.styles?.header },
        body: { padding: 0, ...drawerProps?.styles?.body },
      }}
    >
      <VariantColorProvider
        variantClassName={{ className, ...variantClassName }}
      >
        <Spin spinning={isLoading} tip={props.loadingText}>
          <WidgetTitle
            {...props}
            open={open}
            onClose={onClose}
            isLoading={true}
          />
          <motion.div {...motionProps} style={{ padding: "5px 10px" }}>
            {children}
          </motion.div>
        </Spin>
      </VariantColorProvider>
    </Drawer>
  );
}
