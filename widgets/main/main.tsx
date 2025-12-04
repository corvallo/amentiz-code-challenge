import type { PropsWithChildren } from "react";
import { mainStyle } from "./main.style";

export const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className={mainStyle()}>{children}</main>;
};
