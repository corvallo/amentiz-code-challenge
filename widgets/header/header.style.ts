import { tv } from "tailwind-variants";

export const headetStyle = tv({
  base: `
      h-20
      w-full
      border-b
      border-b-foreground/20
      shadow-xs
      shadow-foreground/5
      flex
      items-center
      px-6
      justify-between
      sticky
      top-0
      z-50
      bg-background
    `,
});
export const logoStyle = tv({
  base: "flex gap-4 items-center focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-foreground",
});
