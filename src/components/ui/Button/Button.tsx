import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import Spinner from "@/components/ui/Spinner/Spinner";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "left",
  loading = false,
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    icon && !children ? styles.iconOnly : "",
    loading ? styles.loading : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && <Spinner size="sm" />}
      {!loading && icon && iconPosition === "left" && (
        <Icon icon={icon} width={size === "sm" ? 14 : size === "lg" ? 20 : 16} height={size === "sm" ? 14 : size === "lg" ? 20 : 16} />
      )}
      {children && <span>{children}</span>}
      {!loading && icon && iconPosition === "right" && (
        <Icon icon={icon} width={size === "sm" ? 14 : size === "lg" ? 20 : 16} height={size === "sm" ? 14 : size === "lg" ? 20 : 16} />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled || loading}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...rest}
    >
      {content}
    </button>
  );
}
