"use client";

import { useContext } from "react";
import { VariantColorContext } from "../contexts/VariantColorContext";

export function useCurrentVariantColor() {
  return useContext(VariantColorContext);
}
