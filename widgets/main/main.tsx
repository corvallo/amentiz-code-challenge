import type { PropsWithChildren } from "react";
import { mainStyle } from "./main.style";

export function Main({ children }: PropsWithChildren) {
  return <main className={mainStyle()}>{children}</main>;
}
