import { ArrowLeft } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import { goBackStyle } from "./go-back.style";

type GoBackProps = {
  className?: string;
} & LinkProps;

export function GoBack({ className, ...props }: GoBackProps) {
  return (
    <Link {...props} className={goBackStyle({ className })}>
      <ArrowLeft width={18} height={18} />
      Go Back
    </Link>
  );
}
