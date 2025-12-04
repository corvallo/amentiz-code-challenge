import { cardContentStyle } from "./card.style";

type CardHeaderProps = React.ComponentProps<"div">;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div data-slot="card-header" className={cardContentStyle({ className })} {...props} />;
}
