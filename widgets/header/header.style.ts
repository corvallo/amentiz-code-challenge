import { tv } from "tailwind-variants";

export const headetStyle = tv({
  base: `
        h-20
        w-full
        border-b
       border-b-white/10
        shadow-xs
      dark:shadow-gray-200
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
