import type { ElementType } from "react";
import type { PolymorphicProps } from "../types";
import { type ButtonVariants, buttonStyle } from "./button.style";

type ButtonBaseProps = ButtonVariants & React.ComponentPropsWithoutRef<"button">;

export function Button<C extends ElementType = "button">({
  as,
  type = "button",
  disabled = false,
  className,
  children,
  ref,
  ...rest
}: PolymorphicProps<C, ButtonBaseProps>) {
  const Component = (as ?? "button") as ElementType;

  return (
    <Component
      ref={ref}
      className={buttonStyle({ disabled, className })}
      {...rest}
      {...(Component === "button" ? { type } : null)}
    >
      {children}
    </Component>
  );
}
