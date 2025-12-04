import { badgeStyle } from "./badge.style";

export const Badge: React.FC<React.ComponentProps<"span">> = ({ className, ...props }) => {
  return <span className={badgeStyle({ className })} {...props} />;
};
