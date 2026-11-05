"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** One observer for the whole page. Sections stay server-rendered and ship no JS. */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("reveal-on");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
