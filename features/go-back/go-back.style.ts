import { tv } from "tailwind-variants";

export const goBackStyle = tv({
  base: `
    inline-flex items-center gap-2 px-3 py-1 border  rounded w-fit
    text-foreground border-foreground/30
    hover:bg-foreground/5 hover:border-foreground/50
    transition-colors duration-200 ease-out
    
  `,
});
