import { ArrowLeft } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import { Button } from "@/shared/components";

type GoBackProps = {
  className?: string;
} & LinkProps;

export function GoBack({ className, ...props }: GoBackProps) {
  return (
    <Button href={props.href} as={Link} title="Go back" className={className}>
      <ArrowLeft width={18} height={18} />
      Go Back
    </Button>
  );
}
