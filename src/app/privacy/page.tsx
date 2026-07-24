"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PrivacyPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/legal/privacy-policy");
  }, [router]);
  return (
    <section className="py-32 text-center text-gray-500">
      Redirecting to Privacy Policy...
    </section>
  );
}
