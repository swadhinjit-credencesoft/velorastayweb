import { notFound } from "next/navigation";
export const dynamicParams = false;
export function generateStaticParams() { return []; }
export default function EmptyLegacyDetailPage(): never { notFound(); }
