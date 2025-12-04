import { tv } from "tailwind-variants";

export const badgeStyle = tv({
  base: `
    inline-flex 
    items-center 
    justify-center 
    rounded-full 
    border 
    px-2 
    py-0.5 
    text-xs 
    font-medium 
    w-fit 
    whitespace-nowrap 
    shrink-0 
    [&>svg]:size-3 
    gap-1 
    [&>svg]:pointer-events-none 
    focus-visible:border-ring 
    focus-visible:ring-ring/50 
    focus-visible:ring-[3px] 
    aria-invalid:ring-destructive/20 
    dark:aria-invalid:ring-destructive/40 
    aria-invalid:border-destructive 
    overflow-hidden 
    border-foreground/30
    bg-primary 
    text-primary-foreground 
    [a&]:hover:bg-primary/90
  `,
});
