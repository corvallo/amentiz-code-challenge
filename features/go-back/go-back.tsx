import { ArrowLeft } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import { goBackStyle } from "./go-back.style";

type GoBackProps = {
  className?: string;
} & LinkProps;

export function GoBack({ className, ...props }: GoBackProps) {
  return (
    <Link {...props} className={goBackStyle({ className })}>
      <ArrowLeft />
      Go Back
    </Link>
  );
}
