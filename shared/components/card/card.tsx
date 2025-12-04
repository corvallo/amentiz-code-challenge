import { cardStyle } from "./card.style";

export const Card: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div data-slot="card" className={cardStyle({ className })} {...props} />
  );
};
