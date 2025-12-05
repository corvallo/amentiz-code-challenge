import { cardHeaderStyle } from "./card.style";

type CardTitleProps = React.ComponentProps<"div">;
export function CardTitle({ className, ...props }: CardTitleProps) {
  return <div data-slot="card-title" className={cardHeaderStyle({ className })} {...props} />;
}
