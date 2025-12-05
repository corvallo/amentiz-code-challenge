import type { ComponentPropsWithoutRef, ElementType, ReactElement } from "react";

export type PolymorphicProps<C extends ElementType, P = {}> = {
  as?: C;
} & P &
  Omit<ComponentPropsWithoutRef<C>, keyof P | "as">;

export type PolymorphicComponent<P = {}, D extends ElementType = "div"> = <C extends ElementType = D>(
  props: PolymorphicProps<C, P>,
) => ReactElement | null;
