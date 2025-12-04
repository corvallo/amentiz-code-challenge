import { tv } from "tailwind-variants";

export const avatarStyle = tv({
  slots: {
    base: `
        inline-flex 
        items-center 
        justify-center 
        rounded-md 
        bg-neutral-200
        text-neutral-700 
        font-medium 
        overflow-hidden
        `,
    image: `
        object-cover
        w-full 
        h-full
    `,
    text: `text-sm`,
  },
});
