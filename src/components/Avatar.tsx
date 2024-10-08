import styles from "./Avatar.module.css";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder, src, alt }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.AvatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
