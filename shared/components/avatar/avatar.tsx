import Image from "next/image";
import { avatarStyle } from "./avatar.style";

type AvatarProps = {
  src?: string | null;
  alt?: string;
  size?: number;
  fallbackText?: string;
  className?: string;
};

const getInitials = (name?: string): string => {
  if (!name) return "?";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

export function Avatar({ className, src, alt, size = 48, fallbackText }: AvatarProps) {
  const { base, image, text } = avatarStyle();
  const initials = getInitials(fallbackText);

  const dimension = `${size}px`;
  return (
    <div
      className={base({ className })}
      style={{ width: dimension, height: dimension }}
      role="img"
      aria-label={alt ?? fallbackText}
    >
      {src ? (
        <Image src={src} alt={alt ?? fallbackText ?? "Avatar"} width={size} height={size} className={image()} />
      ) : (
        <span className={text()}>{initials}</span>
      )}
    </div>
  );
}
