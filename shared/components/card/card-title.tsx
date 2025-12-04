import { cardHeaderStyle } from "./card.style";

export const CardTitle: React.FC<React.ComponentProps<"div">> = ({ className, ...props }) => {
  return <div data-slot="card-title" className={cardHeaderStyle({ className })} {...props} />;
};
