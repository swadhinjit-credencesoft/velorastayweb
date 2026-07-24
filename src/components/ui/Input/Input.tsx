"use client";

import { useId } from "react";
import Icon from "@/components/Icon/Icon";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string;
}

export default function Input({
  label,
  error,
  icon,
  type = "text",
  placeholder,
  className,
  id: externalId,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const id = externalId ?? generatedId;

  const wrapperClasses = [
    styles.wrapper,
    error ? styles.hasError : "",
    icon ? styles.hasIcon : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrap}>
        {icon && (
          <span className={styles.iconPrefix}>
            <Icon icon={icon} width={18} height={18} />
          </span>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder ?? " "}
          className={styles.input}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
        {label && <span className={styles.visuallyHidden}>{label}</span>}
      </div>
      {error && (
        <p id={`${id}-error`} className={styles.errorText} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
