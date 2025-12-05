import { tv } from "tailwind-variants";

export const grandMasterListStyle = tv({
  slots: {
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
    link: `
      group block rounded-xl focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-foreground
      transform transition-transform transition-shadow duration-300 ease-out
      hover:scale-[1.001] hover:shadow-md hover:shadow-foreground/10
      focus-visible:scale-[1.001] focus-visible:shadow-md focus-visible:shadow-foreground/10
    `,
  },
});
