"use client";

import { Icon as IconifyIcon } from "@iconify/react";

interface IconProps {
  icon: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function Icon({ icon, className, width = 20, height = 20 }: IconProps) {
  return <IconifyIcon icon={icon} className={className} width={width} height={height} aria-hidden="true" />;
}
