import Image from "next/image";
import { avatarStyle } from "./avatar.style";

type AvatarProps = {
  src?: string | null;
  alt?: string;
  size?: number;
  fallbackText?: string;
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ className, src, alt, size = 48, fallbackText }) => {
  const { base, image, text } = avatarStyle();
  const initials = fallbackText;

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
};
