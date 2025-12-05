import { cardFooterStyle } from "./card.style";

type CardFooterProps = React.ComponentProps<"div">;

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <div data-slot="card-footer" className={cardFooterStyle({ className })} {...props} />;
}
