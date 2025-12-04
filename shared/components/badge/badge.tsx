import { badgeStyle } from "./badge.style";

type BadgeProps = React.ComponentProps<"span">;

export function Badge({ className, ...props }: BadgeProps) {
  return <span className={badgeStyle({ className })} {...props} />;
}
