import { tv, type VariantProps } from "tailwind-variants";

export const buttonStyle = tv({
  base: `
        gap-2 px-3 py-1 border rounded  inline-flex items-center w-fit
        text-foreground border-foreground/30
        hover:bg-foreground/5 hover:border-foreground/50
        transition-colors duration-200 ease-out
        cursor-pointer focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-foreground
    `,
  variants: {
    disabled: {
      true: "opacity-40 cursor-default pointer-events-none",
      false: "",
    },
  },
  defaultVariants: { disabled: false },
});

export type ButtonVariants = VariantProps<typeof buttonStyle>;
