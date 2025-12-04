import { tv } from "tailwind-variants";

export const paginationStyle = tv({
  base: `mt-6 flex items-center justify-center gap-2 text-sm`,
});

export const paginationLinkStyle = tv({
  base: `px-3 py-1 rounded border hover:bg-neutral-100`,
  variants: {
    disabled: {
      true: "opacity-40 cursor-default pointer-events-none",
    },
  },
});
