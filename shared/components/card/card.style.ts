import { tv } from "tailwind-variants";

export const cardStyle = tv({
  base: `
    bg-foreground/10
    text-foreground 
    flex 
    flex-col 
    gap-6 
    transition
    hover:scale-101
    rounded-xl 
    py-6 
    shadow-md
    shadow-foreground/5
    outline-none
  `,
});

export const cardContentStyle = tv({
  base: `
    @container/card-header 
    grid 
    auto-rows-min 
    grid-rows-[auto_auto] 
    items-start 
    gap-2 
    px-6 
    has-data-[slot=card-action]:grid-cols-[1fr_auto] 
    [.border-b]:pb-6
    `,
});

export const cardHeaderStyle = tv({
  base: `
    leading-none 
    font-semibold
    `,
});

export const cardHeaderContent = tv({
  base: `
    px-6
    `,
});

export const cardFooterStyle = tv({
  base: `
    flex 
    items-center 
    px-6 
    [.border-t]:pt-6
    `,
});
