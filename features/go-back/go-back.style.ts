import { tv } from "tailwind-variants";

export const goBackStyle = tv({
  base: `
    inline-flex items-center gap-2 px-4 py-3 border  rounded-lg w-fit
    text-foreground border-foreground/30
    hover:bg-foreground/5 hover:border-foreground/50
    transition-colors duration-200 ease-out
  `,
});
