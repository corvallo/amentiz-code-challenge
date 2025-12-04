import { tv } from "tailwind-variants";

export const profileCardStyle = tv({
  slots: {
    link: "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-300 rounded-xl block",
    cardTitle: "flex items-start justify-between",
    cardFooter: "text-sm justify-end",
    profileAction: "flex gap-1 items-center",
  },
});
