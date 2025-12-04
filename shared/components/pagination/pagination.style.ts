import { tv } from "tailwind-variants";

export const paginationStyle = tv({
  base: `mt-6 flex items-center justify-center gap-2 text-sm w-full`,
});

export const paginationLinkStyle = tv({
  base: `px-3 py-1 rounded border flex gap-1 items-center text-foreground border-foreground/30
    hover:bg-foreground/5 hover:border-foreground/50
    transition-colors duration-200 ease-out`,
  variants: {
    disabled: {
      true: "opacity-40 cursor-default pointer-events-none",
    },
  },
});
