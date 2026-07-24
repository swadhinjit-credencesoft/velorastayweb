import styles from "./Badge.module.scss";

type BadgeVariant = "accent" | "success" | "warning" | "error" | "neutral";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "accent",
  size = "sm",
  children,
  className,
}: BadgeProps) {
  const classes = [styles.badge, styles[variant], styles[size], className ?? ""]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
