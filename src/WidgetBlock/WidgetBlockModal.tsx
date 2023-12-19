"use client";

import { motion } from "framer-motion";
import { WidgetBlockProps } from "./WidgetBlock";
import Modal from "antd/es/modal/Modal";
import React from "react";
import { WidgetTitle } from "./WidgetTitle";
import { useVariantColor } from "../hooks/useVariantColor";
import clsx from "clsx";
import { Button, Flex, Spin } from "antd";
import {
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { VariantColorProvider } from "../contexts/VariantColorContext";

export type WidgetBlockModalProps = WidgetBlockProps;

export function WidgetBlockModal({
  children,
  ...propsWithoutChildren
}: WidgetBlockModalProps) {
  const { className, ...variantClassName } =
    useVariantColor(propsWithoutChildren);
  const { modalProps, open, onClose, motionProps } = propsWithoutChildren;
  const [height, setHeight] = React.useState<string | number>("auto");
  const onCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClose?.();
    modalProps?.onCancel?.(e);
  };
  const resizeAuto = () =>
    setHeight((height) => (height !== "80vh" ? "80vh" : "auto"));
  const isLoading = open && !!propsWithoutChildren.isLoading;
  return (
    <Modal
      {...modalProps}
      classNames={{
        ...modalProps?.classNames,
        content: clsx(className, modalProps?.classNames?.content),
      }}
      styles={{
        content: {
          ...modalProps?.styles?.content,
          padding: 0,
        },
      }}
      closable={false}
      footer={
        <Flex
          justify="end"
          onDoubleClick={resizeAuto}
          className={clsx(className, "ui-select-none ui-rounded-lg")}
        >
          <Button
            className={className}
            size="small"
            type="text"
            onClick={resizeAuto}
          >
            {height !== "80vh" ? (
              <VerticalAlignBottomOutlined />
            ) : (
              <VerticalAlignTopOutlined />
            )}
          </Button>
        </Flex>
      }
      open={open}
      onCancel={onCancel}
      width={"100%"}
      style={{
        top: 15,
      }}
    >
      <VariantColorProvider
        variantClassName={{ className, ...variantClassName }}
      >
        <Spin spinning={isLoading} tip={propsWithoutChildren.loadingText}>
          <WidgetTitle {...propsWithoutChildren} />
          <motion.div
            {...motionProps}
            style={{ padding: "5px 10px", height, overflow: "auto" }}
          >
            {children}
          </motion.div>
        </Spin>
      </VariantColorProvider>
    </Modal>
  );
}
