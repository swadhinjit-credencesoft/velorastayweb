"use client";

import { useId } from "react";
import Icon from "@/components/Icon/Icon";
import styles from "./Select.module.scss";

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  options: SelectOption[];
  value: string | number;
  onChange: (value: string) => void;
}

export default function Select({
  label,
  options,
  value,
  onChange,
  id: externalId,
  className,
  ...rest
}: SelectProps) {
  const generatedId = useId();
  const id = externalId ?? generatedId;

  const wrapperClasses = [styles.wrapper, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.selectWrap}>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.select}
          {...rest}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className={styles.chevron}>
          <Icon icon="lucide:chevron-down" width={16} height={16} />
        </span>
      </div>
    </div>
  );
}
