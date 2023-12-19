import React, {
  PropsWithChildren,
  createContext,
  useLayoutEffect,
  useMemo,
} from "react";
import { useVariantColor } from "../hooks/useVariantColor";
import { VariantClassName } from "../type";

// eslint-disable-next-line react-hooks/rules-of-hooks
const DefaultVariantColorContext: VariantClassName = useVariantColor({});

export const VariantColorContext = createContext(DefaultVariantColorContext);

export type VariantColorProviderProps = PropsWithChildren<{
  variantClassName: VariantClassName;
}>;
export function VariantColorProvider({
  children,
  variantClassName,
}: VariantColorProviderProps) {
  const variantClassNameDeps = useLazyDeps(variantClassName);

  const variantClassNameMemo = useMemo(
    () => variantClassNameDeps,
    [variantClassNameDeps]
  );

  return (
    <VariantColorContext.Provider value={variantClassNameMemo}>
      {children}
    </VariantColorContext.Provider>
  );
}

function useLazyDeps<T extends { [s: string]: unknown }>(deps: T) {
  const [currentDeps, setCurrentDeps] = React.useState(deps);
  const values = Object.values(deps);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => setCurrentDeps(deps), values);
  return currentDeps;
}
