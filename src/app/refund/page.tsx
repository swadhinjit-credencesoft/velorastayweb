"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RefundPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/legal/refund-policy");
  }, [router]);
  return (
    <section className="py-32 text-center text-gray-500">
      Redirecting to Refund Policy...
    </section>
  );
}
