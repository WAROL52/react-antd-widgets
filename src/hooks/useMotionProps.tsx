"use client";

import { MotionProps } from "framer-motion";

export type useMotionPropsProps = {
  isHoverable?: boolean;
  isClicable?: boolean;
};

export function useMotionProps({
  isClicable,
  isHoverable,
}: useMotionPropsProps = {}) {
  const defaultMotionProps: MotionProps = {
    whileHover: isHoverable ? { scale: 1.01 } : undefined,
    whileTap: isClicable ? { scale: 0.999 } : undefined,
  };
  return defaultMotionProps;
}
