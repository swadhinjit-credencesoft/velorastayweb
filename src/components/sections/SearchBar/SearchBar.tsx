import Link from "next/link";
import { SITE_INFO } from "@/data/site";
import styles from "./SearchBar.module.scss";

interface SearchBarProps { variant?: "hero" | "compact"; }
export default function SearchBar({ variant = "hero" }: SearchBarProps) {
  return <div className={`${styles.searchBar} ${styles[variant]}`}>
    <p>Check availability and rates directly with our team.</p>
    <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}>Call {SITE_INFO.phone}</a>
    <Link href="/rooms">View rooms</Link>
  </div>;
}
