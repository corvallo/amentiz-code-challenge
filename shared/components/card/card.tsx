import { cardStyle } from "./card.style";

type CardProps = React.ComponentProps<"div">;

export function Card({ className, ...props }: CardProps) {
  return <div data-slot="card" className={cardStyle({ className })} {...props} />;
}
