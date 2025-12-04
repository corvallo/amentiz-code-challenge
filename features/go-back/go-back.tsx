import { ArrowLeft } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import { goBackStyle } from "./go-back.style";

type GoBack = {
  className?: string;
} & LinkProps;

export const GoBack: React.FC<GoBack> = ({ className, ...props }) => {
  return (
    <Link {...props} className={goBackStyle({ className })}>
      <ArrowLeft />
      Go Back
    </Link>
  );
};
