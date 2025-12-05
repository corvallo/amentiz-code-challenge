import { tv } from "tailwind-variants";

export const profileCardStyle = tv({
  slots: {
    cardTitle: "flex items-start justify-between",
    cardFooter: "text-sm justify-end",
    profileAction: "flex gap-1 items-center",
  },
});
