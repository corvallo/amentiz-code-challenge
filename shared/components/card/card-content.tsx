import { cardContentStyle } from "./card.style";

type CardContentProps = React.ComponentProps<"div">;

export function CardContent({ className, ...props }: CardContentProps) {
  return <div data-slot="card-content" className={cardContentStyle({ className })} {...props} />;
}
