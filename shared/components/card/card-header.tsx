import { cardContentStyle } from "./card.style";

export const CardHeader: React.FC<React.ComponentProps<"div">> = ({ className, ...props }) => {
  return <div data-slot="card-header" className={cardContentStyle({ className })} {...props} />;
};
