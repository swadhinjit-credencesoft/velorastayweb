"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TermsPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/legal/terms-conditions");
  }, [router]);
  return (
    <section className="py-32 text-center text-gray-500">
      Redirecting to Terms &amp; Conditions...
    </section>
  );
}
